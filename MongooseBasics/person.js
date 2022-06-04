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

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// using vitual property , this property doenst exit in the db at all, but only in the mongoose side in js
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema);