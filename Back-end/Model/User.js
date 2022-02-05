const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nickname: {type: String, required: true},
    mail: {type: String, required: true},
    password: {type: String, required: true},
    discordtag: {type: String, required: true},
    summonerName: {type: String, required: true},
    isAdmin: {type: Boolean, required: false}
});

module.exports = mongoose.model("User",userSchema);