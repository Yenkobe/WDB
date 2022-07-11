const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisisasecrettest'));


app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there, ${name}`)

})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Steven P.');
    res.cookie('animal', 'Leon')
    res.send('OK SENT YOU A COOKIE!')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('nbaTeam', 'Golden State', { signed: true })
    res.send('OK SIGNED YOUR NBA TEAM!')

})

app.get('/verifynbaTeam', (req, res) => {
    console.log(res.cookies)
    res.send(req.signedCookies)
})


app.listen(3000, () => {
    console.log("SERVING ON PORT 3000");
})