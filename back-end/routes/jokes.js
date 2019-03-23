const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const joke_db = require('../Data/mongoose.js');


router.get('/', (req, res)=>{
    joke_db
    .find({
        auth_group: "Public"
    })
    .then(doc=> {
        console.log(doc);
        res.json(doc)
    })
    .catch(err=> {
        console.log(err)
    })

    console.log('it worked');
})


module.exports = router;