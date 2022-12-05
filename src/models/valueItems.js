const mongoose = require("mongoose");

const valueItemSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    item: {
        type: Number,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
});
module.exports = mongoose.model('ValueItems', valueItemSchema);