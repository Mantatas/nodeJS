const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "This field cannot be empty"]
    },
    lastName:{
        type: String,
        required: [true, "This field cannot be empty"]
    },
    field: {
        type: String,
        required: [true, "This field cannot be empty"]
    },
    picture:{
        type: String,
        required: [true, "This field cannot be empty"]
    },
    city: {
        type: String,
        required: [true, "This field cannot be empty"]
    },
    service:{
        type: String,
        required: [true, "This field cannot be empty"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})




const Mechanic = mongoose.model("Mechanic", mechanicSchema);

module.exports = Mechanic;
