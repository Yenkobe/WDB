const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


//conect mongo
mongoose.connect('mongodb://localhost:27017/authDemo')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(() => {
        console.log("Oh NO MONGO CONNECTION ERROR!!")
        console.log(err)
    })
app.use(express.urlencoded({ extended: true }));

// setup ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE!')
})

//using bcrypt
app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    //storaging that into the db
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    res.redirect('/');

})

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET! YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN!')
})


app.listen(3000, () => {
    console.log('SERVING YOUR APP!')
})