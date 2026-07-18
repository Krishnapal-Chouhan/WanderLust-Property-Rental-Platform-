const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

// Apply plugin BEFORE creating model
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

console.log(typeof passportLocalMongoose); // function
console.log(typeof User.authenticate);     // function
console.log(typeof User.register);         // function

module.exports = User;