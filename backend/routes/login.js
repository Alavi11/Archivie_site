const express = require("express");
const router = express.Router();
const cors = require("cors");
const App = express();
App.use(cors({
    origin:"https://khoshovash.iran.liara.run/login"
}))



const controller = require("../controller/loginController");

router.post("/",controller.get);


module.exports = router ;