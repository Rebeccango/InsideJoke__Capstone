const express = require('express');
const router = express.Router();

//Example 
// router.get('/', (req, res) => {
//     res.json(recipes);
// })

router.get('/', (req, res)=>{
    res.send('this is the endpoint for which you will call to create new jokes');
    console.log('it worked');
})

module.exports = router;