const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name : {type:String},
    type : {type : String}
})

const model = new mongoose.model("main",schema);

module.exports = model;