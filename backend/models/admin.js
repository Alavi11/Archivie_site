const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username:{type : String, required : true},
    password:{type : String, required : true}

})

const model = new mongoose.model("admin",schema);

module.exports = model;