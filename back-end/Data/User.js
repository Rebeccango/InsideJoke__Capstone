const mongoose = require('mongoose');


var userSchema = mongoose.Schema({
  // user_id: mongoose.Schema.Types.ObjectId,
  name: { 
      type: 'String', 
      unique: true
    },
  email: String,
  password: String,
  created: {
    type: Date,
    default: Date.now
  }
});

var user = mongoose.model('User', userSchema);
module.exports = user;