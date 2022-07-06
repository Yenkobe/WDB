const { application } = require('express');
const express = require('express');
const router = express.Router();

//if we used router.use instead of app.use this middleware will apply only to this app.(admin)

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("SORRY NOT AN ADMIN")
})

//?isAdmin=true  ---query String

router.get('/topsecret', (req, res) => {
    res.send("THIS IS TOP SECRET")
})

router.get('/deleteeverything', (req, res) => {
    res.send("OK DELETE IT ALL !! ")
})

module.exports = router;