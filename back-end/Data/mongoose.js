const mongoose = require('mongoose');

// let joke = new mongoose.Schema({
//     title: String
// })

// module.exports = mongoose.model('jokeExpNm', joke)

let joke = new mongoose.Schema({
        author: String,
        type: String,
        auth_group: String,
        question: String,
        choices: String,
        answer: String,
        tags:String
})

joke.set('toObject', { getters: true });

module.exports = mongoose.model('joke_db', joke)