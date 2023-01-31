const express = require("express");
const multer = require("multer");
const router = express.Router();
const controllermain = require("../controller/mainController");
const cors = require("cors");
const App = express();
App.use(cors({
  origin:"https://khoshovash.iran.liara.run"
}))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/Main')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname )
    }
})
  
const upload = multer({ storage: storage })



router.get("/",controllermain.getlist);
router.post("/",upload.single("main"),controllermain.creat);
router.delete("/:id",controllermain.delete);


module.exports = router ;