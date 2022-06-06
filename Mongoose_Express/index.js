// start alway with the basic , checking the port etc -->
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
//Esto es despues que instalamos en package method override --- chequear la linea 61
const methodOverride = require('method-override')
// app.use(methodOverride('_method')) ----- lo movi a donde estan los app.use en la linea25

//export from the product.js
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStandTest')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(() => {
        console.log("Oh NO MONGO CONNECTION ERROR!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// esto se necesita para conectar el button, donde se enviara la nueva info.
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//updated/add new categories
const categories = ['fruit', 'vegetable', 'dairy'];

// test if is working!! 
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products });

})
//creating products
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})
//where we want the product to be submitted.

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    //important redirect
    res.redirect(`/products/${newProduct._id}`)
})
//product detail
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})
// When you send a database query like .find() it needs some time to communicate to the database and get the data back,
// and when you add the await keyword the code will basically 'pause' and wait to get the data back from the database.

//Updating a Product
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    //find the product byid
    const product = await Product.findById(id)
    res.render('products/edit', { product, categories })
})
//here we need to instal the method override cuz we are using POST AND HERE WE ARE USING PUT.
// SO we need to install the package ---- npm i method-override
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${product._id}`);
})
app.listen(3000, () => {
    console.log("App is listening on PORT 3000!")
})


