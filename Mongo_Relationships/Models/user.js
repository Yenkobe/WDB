const mongoose = require('mongoose');
// https://mongoosejs.com/ --- conect from the localhost we can get it from the mongoose pag
mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log("Connection OPEN!!")
    })
    .catch(() => {
        console.log("Oh no ERROR!!")
        console.log(err)
    })
