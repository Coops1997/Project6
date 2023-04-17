const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{type: String, required: true, unique: true, match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please enter a correct email address"]},
    password:{type: String, required: true}

})

module.exports = mongoose.model('user', userSchema);