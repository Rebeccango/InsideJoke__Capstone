const mongoose = require('mongoose');

var groupsSchema = mongoose.Schema({
    admin: {
        name: String,
        id: mongoose.Schema.Types.ObjectId,
    },
    group: {
        alias: String,
        id: mongoose.Schema.Types.ObjectId,
        members_name: Array,
        members_id: Array,
    }
});

module.exports = mongoose.model('groups', groupsSchema);

