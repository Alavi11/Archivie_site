const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    year : {type:String},
    file : {type : String},
    type : {type : String}
})

const model = new mongoose.model("archive",schema);

module.exports = model;