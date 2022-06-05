//This is a file I will run on its own any time.
//I just want to get some new data in my database.
//And this is pretty common to do actually, to seed your database separately from a Web app
//just for development purposes.


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

//insert ONE PRODUCT
// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// INSERT MANY

const seedProducts = [
    {
        name: 'Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Watermelon',
        price: 12.99,
        category: 'fruit'
    },
    {
        name: 'Garlic',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Mango',
        price: 2.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: 2.69,
        category: 'dairy'
    },
]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })