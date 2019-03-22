const mongoose = require('mongoose');

let joke = new mongoose.Schema({
    title: String
})

module.exports = mongoose.model('jokeExpNm', joke)