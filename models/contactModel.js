const mongoose = require("mongoose")

const contactSchemma = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please add contact name"],
    },
    email : {
        type : String,
        required : [true, "Please add email"],
    }
}, {
    timestamps : true,
});

module.exports = mongoose.model("Contact", contactSchemma);