const express = require('express');
const cors = require('cors');
const axios = require('axios');

const env = require('dotenv').config();

const db = require('./db.js')
const { categoryModel, userModel } = require('./db.js');
const app = express();

app.use(express.json());
app.use(cors());
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const SECRET_KEY = process.env.SECRET_KEY;; 


app.get('/allproducts', async (req, res) => {
  try {
    const data = await categoryModel.find();
    // console.log(data)
    res.json(data);
  }
  catch (error) {
    res.status(500).send("Internal Server Error");
    console.error(error);
  }
})

app.post('/signUp', async (req, res) => {
  try {
    let data = req.body;
    let user = new userModel(data);
    user = await user.save()
    res.json({ user, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "User registration failed" });
  }
})

app.post('/login', async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ error: "please enter all fields" })
  };

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" })
  };
  // check if password is correct

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(401).json({ error: "Invalid email or password" });

  // Create JWT Token
  // const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
  //   expiresIn: "1h"
  // });

  // send the token to the client

  res.json({ message: "Login successful", user });
  // res.json(user);




})

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//       if (err) return res.sendStatus(403);
//       req.user = user;
//       next();
//     });
//   }


// Route to fetch products from Fake Store API
app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product' });
  }


})

//  amazon search api




app.get('/api/search', async (req, res) => {
  const userQuery = req.query.q;

  if (!userQuery) {
    return res.status(400).json({ error: "Missing search query" });
  }

  const params = {
    api_key: '6822f4d440c520e08853a7cf',
    q: userQuery,
    page: "1",
    // domain: "com",
    gl: "us",
    // postal_code: ""
  };

  try {
    const response = await axios.get('https://api.ecommerceapi.io/google_shopping/', { params : params });
    const data = response.data.shopping_results;

if (!data || data.length === 0) {
      return res.status(404).json({ error: "No search results found" });
    }

    // ✅ Optional: Clean existing entries with same query (to avoid duplicates)
    await categoryModel.deleteMany({ searchQuery: userQuery });

    // ✅ Save data to MongoDB
    const toInsert = data.map(item => ({
      title: item.title,
      product_link: item.product_link,
      product_id: item.product_id,
      source: item.source,
      price: item.price,
      rating : item.rating,
      reviews : item.reviews,
      delivery :item.delivery,
      thumbnail : item.thumbnail,
      searchQuery: userQuery
    }));

    await categoryModel.insertMany(toInsert);

    // ✅ Return top 5 results
    const topFiveResults = toInsert.slice(0, 12);

    res.json(topFiveResults);
  } catch (error) {
    console.error('API request failed:', error.message);
    res.status(500).json({ error: "Failed to fetch search results" });
  }
});


//  flipkart search api by ecommerceapi.io

// app.get('/api/search', async (req, res) => {
//   const query = req.query.q;

//   if (!query) {
//     return res.status(400).json({ error: "Missing search query" });
//   }

//   const params = {
//     api_key: '6822f4d440c520e08853a7cf',
//     // query : userQuery, // or paste your key here
//     url: `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`
//   };

//   try {
//     const response = await axios.get('https://api.ecommerceapi.io/flipkart_search', { params });
//     const results = response.data.results; // Only 5 results
//     res.json(results);
//   } catch (error) {
//     console.error('Error fetching search results:', error.message);
//     res.status(500).json({ error: "Search failed" });
//   }
// });


// const getFlipkartData = async (query) => {
//     const encodedQuery = encodeURIComponent(query);
//     // https://flipkart-search-results.p.rapidapi.com/search/${encodedQuery}

//     try {
//       const response = await axios.get(
//         `https://flipkart-apis.p.rapidapi.com/backend/rapidapi/category-products-list/${encodedQuery}`,
//         {
//           headers: {
//             "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
//             "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
//           },
//         }
//       );

//       console.log(response.data.products)

//     //   const results = response.data.items.map(item => ({

//       const results = response.data.products.map(item => ({
//         title: item.name,
//         price: item.price,
//         image: item.image,
//         link: item.url,
//       }));

//       return results.slice(0, 10); // Return top 10 results
//     } catch (err) {
//       console.error("Flipkart API error:", err.message);
//       return [];
//     }
//   };

//   app.get('/api/search/:query' , async(req,res)=>{
//     const query = req.params.query;

//     if (!query) return res.status(400).json({ message: "Query is required" });

//     try {
//       const [ flipkartResults] = await Promise.all([
//         getFlipkartData(query),
//       ]);

//       res.json({
//         flipkart: flipkartResults,
//       });
//     } catch (err) {
//       res.status(500).json({ error: "Failed to fetch product data" });
//     }
//   })


// google search api 









app.listen(4000, () => {
  console.log('server started at port 4000')
})