const express = require('express');
      app = express();
      PORT = process.env.PORT || 8080;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', function(error) {
 if(error) throw error; 
 console.log("we're connected!");
});

mongoose.promise = global.Promise;

const cors  = require('cors');
const bodyParser = require('body-parser');
//Auth
const session = require('express-session');
const errorHandler = require('errorhandler');
const isProduction = process.env.NODE_ENV === 'production'; //allows third party to set environment (ie. prod or dev mode )

//REQ setup  for middleware, order important 
app.use(cors({ origin:'http://localhost:3000' })); //CORS (cross-origin resource sharing required for dev convenience)
app.use(bodyParser.urlencoded({extended:false})) //Body Parser to transcribe incoming request data so that it is in a compatible formate
app.use(bodyParser.json());
app.use('/createnew', require('./routes/createnew')); //setting up routes
app.use('/jokes', require('./routes/jokes'));



 //SERVER set-up/config  
app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT: ${PORT}`);
})