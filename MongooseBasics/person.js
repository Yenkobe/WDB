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

//Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware. 
//Document middleware is supported for the following document functions.In document middleware functions, this refers to the document.
personSchema.pre('save', async function () {
    //this will run before save ... just a silly example.
    this.first = 'Steven';
    this.last = 'Pan';
    console.log("ABOUT TO SAVE!!")

})
personSchema.post('save', async function () {
    console.log("JUST SAVED!!")
})

const Person = mongoose.model('Person', personSchema);