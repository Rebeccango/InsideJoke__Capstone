//required 
//1. Express -- required to initiate server 
//2. BodyParser -- to deal with POST requests or anyrequests that will send a response to the server as the incoming data will be in JSON format
//3. CORS -- middleware that that will allow "cross-origin" resources sharing ( access to external sources to restricted files )
const express = require('express');
      app = express();
      PORT = 8080;

const bodyParser = require('body-parser');
//middleware included in express npm which helps defines some routes, and mounts the router module on a path in the main app.
const cors  = require('cors');

//CORS - set up to share private files with front end, which will run on localhost: 3000
app.use(cors({ origin:'http://localhost:3000' }));

//activating bodyParser for HTTP requests, since data is transfered using html forms 
//this helps form the headers for incoming data
    // parse application/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
    //parse application/json
app.use(bodyParser.json());


//ESTABLISHING ENDPOINTS (routes) -- and for which client requests
 app.use('/createnew', require('./routes/createnew'));

 app.use('/jokes', require('./routes/jokes'));


//Initiate server -- params = [path] for which server is listening + (callback)=>{console.log here}
app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT: ${PORT}`);
})