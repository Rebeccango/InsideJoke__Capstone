const mongoose = require('mongoose');

let joke = new mongoose.Schema({
        author: String,
        type: String,
        auth_group: String,
        question: String,
        choices: String,
        answer: String,
        tags:String,
        date: {
                type: Date,
                default: Date.now
        }
})

module.exports = mongoose.model('joke_db', joke)
