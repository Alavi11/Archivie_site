const express = require("express");
const multer = require("multer");
const App = express();
const router = express.Router();
const controllerArchive = require("../controller/archiveController");
const cors = require("cors");

App.use(cors({
  origin:"https://khoshovash.iran.liara.run"
}))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/Archive')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname )
    }
})
  
const upload = multer({ storage: storage })



router.get("/",controllerArchive.getlist);
router.post("/",upload.single("archive"),controllerArchive.creat);
router.delete("/:id",controllerArchive.delete);



module.exports = router ;