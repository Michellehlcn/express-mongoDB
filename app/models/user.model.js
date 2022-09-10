const mongoose = require("mongoose");

// The Mongoose models represents and roles collection in mongoDB database
// User object will have a roles array that contains ids in roles colelction as reference
// this kind is called Reference Data models or Normalization
// We dont need to write CRUD functions because Mongoose supports all of them
// these functions will be used in Controllers and Middlewares.

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }]
    })
);
module.exports = User;