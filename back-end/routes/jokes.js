const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



router.get('/', (req, res)=>{
    res.send('this is the endpoint for which you will call to view your personal jokes');
    console.log('it worked');
})


module.exports = router;