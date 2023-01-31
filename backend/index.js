const express = require("express");
const mongoose = require("mongoose");
const App = express();
const api = require("./routes/api");
const cors = require("cors");

class Application{
    constructor(){
        this.setupExpressServer();
        this.setupMongoose();
        this.setupRoutesAndMiddlewares();
        //this.setupConfigs();
    }
    setupExpressServer(){
        App.use(cors({
            origin:"https://khoshovash.iran.liara.run"
        }))
        App.listen(3000,(err)=>{
            if(err){console.log("not connected");}
            else{
                console.log("connected");
            }
        })
    }
    setupMongoose(){
        mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true ,useUnifiedTopology: true })
        .then(()=>{
            console.log("vasl shod");
        }).catch(()=>{
            console.log("vasl nashode");
        })

    }
    setupRoutesAndMiddlewares(){
        App.use(express.json());
        App.use("/api",api);
        App.use(express.static("upload"));
    }
}

module.exports = Application;
