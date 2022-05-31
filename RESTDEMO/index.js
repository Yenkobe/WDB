const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: getId } = require('uuid'); // getting a ramdon id ---> intalling "npm install uuid" /// https://www.npmjs.com/package/uuid


app.use(express.urlencoded({ extended: true })) // for parsing url uncode date
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// fake comments( just for test)
let comments = [
    {
        id: getId(),
        username: 'Natalia',
        comment: 'lol that is so funny'
    },
    {
        id: getId(),
        username: 'Kobe',
        comment: 'I love basketball'
    },
    {
        id: getId(),
        username: 'Steven',
        comment: 'I will cry if you dont give me some food'
    },
    {
        id: getId(),
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
    comments.push({ username, comment, id: getId() })
    // res.redirect -- when u make a new comment it will send you back to /comments
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');


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