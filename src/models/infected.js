const mongoose = require("mongoose");
const infectedRegistrySchema = mongoose.Schema({
    idUserregister: {
        type: Number,
        required: true,
    },
    idRegistredUser: {
        type: Number,
        required: true,
    }
});
module.exports = mongoose.model('Infected', infectedRegistrySchema);