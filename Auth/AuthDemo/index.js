const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');


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
app.use(session({ secret: 'notagoodsecret' }));

//Require Login Middleware

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}


// setup ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE!')
})

app.get('/register', (req, res) => {
    res.render('register')
})

//Register using bcrypt
app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    //storing that into the db
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');

})

//Login
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    //find user by username
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password)
    if (validPassword) {
        // means if you successfully log in we are storing your user_id in the session
        req.session.user_id = user._id;
        res.redirect('/secret');
    } else {
        res.send('/login');
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/login');
})


app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})


app.listen(3000, () => {
    console.log('SERVING YOUR APP!')
})