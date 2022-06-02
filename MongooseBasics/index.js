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

// if we plan on accessing it or working with that data in a JavaScript file and we're using Mongoose,
// the first thing that we need to do is to define a model for each one

//Important!!
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,

});

const Movie = mongoose.model('Movie', movieSchema);
// const ecomon = new Movie({ title: 'ecomon', year: 2000, score: 8.5, rating: 'A' });

Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Start war', year: 1994, score: 7.5, rating: 'R' },
    { title: 'Madagascar', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.2, rating: 'PG-13' }
])
    .then(data => {
        console.log('IT WORKED!')
        console.log(data);
    })