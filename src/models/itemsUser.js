const mongoose = require("mongoose");

const itemUserSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    Water: {
        type: Number,
        required: true,
    },
    Food: {
        type: Number,
        required: true
    },
    Medication: {
        type: Number,
        required: true
    },
    Ammunition: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('ItemsUser', itemUserSchema);