const headerModel = require("../models/header");
const _ = require("lodash");

class headerController{
    async getlist(req,res){
        const list = await headerModel.find();
        res.send(list);
    }
    async creat(req,res){
        console.log(req.file);
        const name = req.file.filename;
        let header = new headerModel({
        name : name
    });
        header = await header.save();
        res.send(header);
    }
}
module.exports = new headerController();