const mongoose = require('mongoose');


var userSchema = mongoose.Schema({
  // user_id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  created: {
    type: Date,
    default: Date.now
  }
});

var user = mongoose.model('user', userSchema);
module.exports = user;