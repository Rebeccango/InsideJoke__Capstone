const express = require('express');
const router = express.Router();
// const uuid = require('uuid[v1|v2|v3|v4]');
//test data 
// const userData = require('../test/data/joke.js');

const joke_db = require('../Data/mongoose.js');
//Example 
// router.get('/', (req, res) => {
//     res.json(recipes);
// })

router.post('/', (req, res)=>{
    // res.json(jokeExpNm);
   console.log(req.body);
    //console.log(jokeExpNm);
    const joke = new joke_db({
        author: req.body.author,
        type: req.body.type,
        auth_groups: req.body.auth_groups,
        question: req.body.question,
        answer: req.body.answer,
        choices: req.body.choices || null,
        tags: req.body.tags
    });
    joke.save().then(doc => {
        console.log(doc);
        res.send('hellow');
        
    }).catch(err => {
        console.error(err);
        res.status(500).send('error');
    });
})

module.exports = router;