//https://www.npmjs.com/package/express-session

const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }

app.use(session(sessionOptions));

app.get('/viewcounts', (req, res) => {
    // first time you view it will set up at 1
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`)

})

app.get('/register', (req, res) => {
    // /register?username=Steven
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`)
})
app.listen(3000, () => {
    console.log("SERVING ON PORT 3000");
})