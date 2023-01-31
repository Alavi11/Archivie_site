const express = require("express");
const multer = require("multer");
const router = express.Router();
const controllertazeha = require("../controller/tazehaController");
const cors = require("cors");
const App = express();
App.use(cors({
  origin:"https://khoshovash.iran.liara.run"
}))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/Tazeha')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname )
    }
})
  
const upload = multer({ storage: storage })



router.get("/",controllertazeha.getlist);
router.post("/",upload.single("tazeha"),controllertazeha.creat);
router.delete("/:id",controllertazeha.delete);


module.exports = router ;