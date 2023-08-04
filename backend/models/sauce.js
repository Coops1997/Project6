const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId:{ type: String ,required: true},
    name: {type: String, require: true},
    manufacturer: { type: String, require :true},
    description: { type: String, require: true},
    mainPepper: { type: String, require: true},
    imageUrl: {type: String, require: true },
    heat: { type: Number, require: true },
    likes: { type: Number, required: false, default: 0 },
    dislikes: { type: Number, required: false, default: 0 },
    usersLiked: { type: Array, required: false },
    usersDisliked: {type: Array, required: false },
});

<<<<<<< HEAD
module.exports = mongoose.model('Sauce', sauceSchema);
=======
module.exports = mongoose.model('Sauce', sauceSchema);
>>>>>>> 85478041859aec86867d2ca073d626e33e504d96
