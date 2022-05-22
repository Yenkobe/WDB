const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true })) // for parsing url uncode date
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// fake comments( just for test)
const comments = [
    {
        username: 'Natalia',
        comment: 'lol that is so funny'
    },
    {
        username: 'Kobe',
        comment: 'I love basketball'
    },
    {
        username: 'Steven',
        comment: 'I will cry if you dont give me some food'
    },
    {
        username: 'Sk8erboi',
        comment: 'Delete you account, Steven'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

// Form to create a new comment

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

//where data will be sent

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.send("IT WORKED!")
})


app.get('/tacos', (req, res) => {
    res.send("GET / tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})

// USING COMMENTS AS A RESOURCE    ~~~~ Also apply for JSON API
// -NAME     -PATH             -VERB     -PURPOSE
// Index    /comments          GET       Display all customElements
// New      /comments/new      GET       Form to create a new comment
//Create    /comments          POST      Creates new comments on server -- where data will be sent
//Show      /comments/:id      GET       Details for one specific comment
//Edit      /comments/:id/edit GET       Form to edit specific comment
//Update    /comments/:id      PATCH     Updates specific comment on server
//Destroy   /comments/:id      DELETE    Deletes specific item on server