const express = require('express');
const cors = require('cors');
const axios = require('axios');

const db = require('./db')
const { categoryModel, userModel } = require('./db.js');
const app = express();

app.use(express.json());
app.use(cors());
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = "yourSecretKey"; // Store this securely in .env file


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
        res.json(user , { message: "User registered successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "User registration failed" });
    }
})

app.post('/login', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ eror: "please enter all fields" })
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
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
        expiresIn: "1h"
    });

    // send the token to the client

    res.json({ message: "Login successful", token , user });
    // res.json(user);




})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }


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




app.listen('4000', () => {
    console.log('server started at port 4000')
})