//required 
//1. Express -- required to initiate server 
//2. BodyParser -- to deal with POST requests or anyrequests that will send a response to the server as the incoming data will be in JSON format
//3. CORS -- middleware that that will allow "cross-origin" resources sharing ( access to external sources to restricted files )
const express = require('express');
      app = express();
      PORT = 8080;

const bodyParser = require('body-parser');




//Initiate server -- params = [path] for which server is listening + (callback)=>{console.log here}
app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT: ${PORT}`);
})