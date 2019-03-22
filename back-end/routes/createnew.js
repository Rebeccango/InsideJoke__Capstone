const express = require('express');
const router = express.Router();
// const uuid = require('uuid[v1|v2|v3|v4]');
//test data 
const userData = require('../test/data/joke.js')
//Example 
// router.get('/', (req, res) => {
//     res.json(recipes);
// })

router.post('/', (req, res)=>{
    res.json(userData);
    console.log(req.body);
})

module.exports = router;