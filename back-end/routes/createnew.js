const express = require('express');
const router = express.Router();

const joke_db = require('../Data/mongoose.js');
const user = require('../Data/User.js');
const groups = require('../Data/Groups.js');

router.post('/group', (req, res)=>{
    console.log(req.body);
    //  console.log(jokeExpNm);
     const newGroup = new groups({
        admin: {
            name: "Rebecca Ngo",
        },
        group: {
            alias: "Family",
            members_name: ["Rebecca", "Jessica", "Micke", "Henry"],
        }
         });
 
     newGroup.save().then(doc => {
         console.log(doc);
         res.send('hellow');
         
     }).catch(err => {
         console.error(err);
         res.status(500).send('error');
     });
 })
 

router.post('/user', (req, res)=>{
   console.log(req.body);
    const newUser = new user({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then(doc => {
        console.log(doc);
        res.send('hellow');
        
    }).catch(err => {
        console.error(err);
        res.status(500).send('error');
    });
})


router.post('/', (req, res)=>{
    // res.json(jokeExpNm);
   console.log(req.body);
    //console.log(jokeExpNm);
    const joke = new joke_db({
        author: req.body.author,
        type: req.body.type,
        auth_group: req.body.auth_group,
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