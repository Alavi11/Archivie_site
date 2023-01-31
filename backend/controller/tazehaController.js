const tazehamodel = require("../models/tazeha");

class tazehaController{
    async getlist(req,res){
        const list = await tazehamodel.find();
        const List =list.reverse();
        res.send(List);
    }
    async creat(req,res){
        const name = req.file.filename;
        const type = req.body.type; 
        let archive = new tazehamodel({
            name : name,
            type : type,
        });
        archive = await archive.save();
        res.send(archive);
    }
    async delete(req,res){
        await tazehamodel.findByIdAndRemove(req.params.id);
        res.send(true);
    }
    

};

module.exports = new tazehaController() ;