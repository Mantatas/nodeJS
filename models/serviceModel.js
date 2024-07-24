const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This field cannot be empty"]
    },
    address: {
        type: String,
        required: [true, "This field cannot be empty"]
    },
    owner: {
        type: String,
        required: [true, "This field cannot be empty"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;