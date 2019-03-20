const express = require('express');
const router = express.Router();



router.get('/', (req, res)=>{
    res.send('this is the endpoint for which you will call to view your personal jokes');
    console.log('it worked');
})


module.exports = router;