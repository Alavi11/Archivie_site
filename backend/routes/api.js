const express = require("express");
const App = express();
const router = express.Router();
const header =require("./header");
const login = require("./login");
const archive = require("./archve");
const tazeha = require("./tazeha");
const main = require("./main");
const cors = require("cors");
App.use(cors({
    origin:"https://khoshovash.iran.liara.run"
}))

router.use("/header",header);
router.use("/login",login);
router.use("/archive",archive);
router.use("/tazeha",tazeha);
router.use("/main",main);



module.exports = router;