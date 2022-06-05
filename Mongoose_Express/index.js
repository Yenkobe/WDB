// start alway with the basic , checking the port etc -->
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

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

// test if is working!! 
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products });

})
// When you send a database query like .find() it needs some time to communicate to the database and get the data back,
// and when you add the await keyword the code will basically 'pause' and wait to get the data back from the database.

app.listen(3000, () => {
    console.log("App is listening on PORT 3000!")
})


