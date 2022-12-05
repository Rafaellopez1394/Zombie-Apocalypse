const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    infected: {
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model('User', userSchema);