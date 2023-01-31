const mongoose = require("mongoose");

const shema = new mongoose.Schema({
    name:{type : String}
})

const model = new mongoose.model("header",shema);

module.exports = model;