const express = require('express');
const router = express.Router();
// const uuid = require('uuid[v1|v2|v3|v4]');
//test data 
// const userData = require('../test/data/joke.js');

const jokeExpNm = require('../Data/mongoose.js');
//Example 
// router.get('/', (req, res) => {
//     res.json(recipes);
// })

router.post('/', (req, res)=>{
    // res.json(jokeExpNm);
   console.log(req.body);
    //console.log(jokeExpNm);
    const joke = new jokeExpNm({
        title: 'Andre'
    });
    joke.save().then(doc => {
        console.log(doc);

        res.send('ok');
    }).catch(err => {
        console.error(err);
        res.status(500).send('error');
    });


})

module.exports = router;