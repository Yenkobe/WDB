const mongoose = require('mongoose');
// https://mongoosejs.com/ --- conect from the localhost we can get it from the mongoose pag
mongoose.connect('mongodb://localhost:27017/moviesApp')
    .then(() => {
        console.log("Connection OPEN!!")
    })
    .catch(() => {
        console.log("Oh no ERROR!!")
        console.log(err)
    })

//using required:true -- its more common 

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

const game = new Product({ name: 'NBA2K22', price: 79.99 })
game.save()
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err);
    })