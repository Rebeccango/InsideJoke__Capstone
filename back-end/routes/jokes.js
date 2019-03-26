const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const joke_db = require('../Data/mongoose.js');


router.get('/:group', (req, res)=>{

    console.log(req.params.group);
    joke_db
    .find({
        auth_group: req.params.group
    })
    .then(doc=> {
        // console.log(doc);
        res.json(doc)
    })
    .catch(err=> {
        console.log(err)
    })

    console.log('it worked');
})


module.exports = router;