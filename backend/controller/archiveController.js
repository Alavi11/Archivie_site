const ArchiveModel = require("../models/Archive");
const _ = require("lodash");

class archiveController{
    async getlist(req,res){
        const list = await ArchiveModel.find();
        const List =list.reverse();
        res.send(List);
    }
    async creat(req,res){
        const name = req.file.filename;
        const year = req.body.text; 
        const type = req.body.type; 
        let archive = new ArchiveModel({
        year : year,
        file : name,
        type : type
    });
        archive = await archive.save();
        res.send(archive);
    }
    async delete(req,res){
        await ArchiveModel.findByIdAndRemove(req.params.id)
        res.send(true);
    }
}
module.exports = new archiveController();