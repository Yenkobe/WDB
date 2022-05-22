const express = require("express");
const app = express();
// important
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!! ")
//     // console.dir(req)
//     // When the parameter is a String, the method sets the Content-Type to “text/html”:
//     // res.send("HELLO, WE GOT YOUR REQUEST!!")

// })

//Getting response from the browser depending what the user request
// /cats => ' Meow'
// /dogs => 'Woof'
// '/' => 'This is the home page'

app.get('/', (req, res) => {
    res.send('This is the home page!!!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})


app.listen(4000, () => {
    console.log("LISTENING ON PORT 4000!!")
})

