const mainmodel = require("../models/main");

class mainController{
    async getlist(req,res){
        const list = await mainmodel.find();
        const List =list.reverse();
        res.send(List);
    }
    async creat(req,res){
        const name = req.file.filename;
        const type = req.body.type; 
        let archive = new mainmodel({
            name : name,
            type : type,
        });
        archive = await archive.save();
        res.send(archive);
    }
    async delete(req,res){
        await mainmodel.findByIdAndRemove(req.params.id)
        res.send(true);
    }
    

};

module.exports = new mainController() ;