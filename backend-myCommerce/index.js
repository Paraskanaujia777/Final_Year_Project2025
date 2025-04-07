const express = require('express');
const cors = require('cors');
const axios = require('axios');

const db = require('./db')
const { categoryModel, userModel } = require('./db.js');
const app = express();

app.use(express.json());
app.use(cors());


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
        res.json(user);
    } catch (error) {
        console.log(error)
    }
})

app.post('/login', async (req, res) => {

    let data = req.body;
    if (data.email && data.password) {

        // let x = data.firstName
        let findUser = await userModel.findOne(data);
        if (findUser) {
            res.json(findUser)
            // console.log(findUser)
        }
        else {
            res.json({ err: "no user found" })
        }
    }
    else {
        res.json({err:'enter both email and password'})
    }

})


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

  app.get('/api/products/:id', async(req,res)=>{
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Error fetching product' });
    }


  })




app.listen('4000', () => {
    console.log('server started at port 4000')
})