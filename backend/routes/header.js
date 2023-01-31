const express = require("express");
const multer = require("multer");
const router = express.Router();
const controllerHeader = require("../controller/headerController");
const App = express();
const cors = require("cors");

App.use(cors({
  origin:"https://khoshovash.iran.liara.run"
}))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname )
    }
})
  
const upload = multer({ storage: storage })



router.get("/",controllerHeader.getlist);
router.post("/",upload.single("headerPhoto"),controllerHeader.creat);



module.exports = router ;