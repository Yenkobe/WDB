const express = require('express');
const router = express.Router();

router.get('/shelters', (req, res) => {
    res.send("ALL SHELTERS")
})

// Create a shelter should be post
router.post('/shelters', (req, res) => {
    res.send("CREATING SHELTERS")
})

router.get('/shelters/:id', (req, res) => {
    res.send("VIEWING ONE SHELTER")
})

router.get('/shelters/:id/edit', (req, res) => {
    res.send("EDITING ONE SHELTER")
})

module.exports = router;

