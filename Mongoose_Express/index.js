// start alway with the basic , checking the port etc -->
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

//export from the product.js
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(() => {
        console.log("Oh NO MONGO CONNECTION ERROR!!")
        console.log(err)
    })

app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('worked!')
})

app.listen(3000, () => {
    console.log("App is listening on PORT 3000!")
})


