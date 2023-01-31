const adminModel = require("../models/admin");
const _ = require("lodash");

class loginController{
    async get(req,res){
        const admin = await adminModel.findOne({username : req.body.username})
        if(!admin){
            return res.send(false)
        }
    
        if(admin.password != req.body.password){
            return res.send(false)
        }
        res.send(admin);
    }
}
module.exports = new loginController();