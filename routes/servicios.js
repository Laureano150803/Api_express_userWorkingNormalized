import  express from "express";
const router = express.Router()
import create from "../controllers/servicio/create.js";
import read from "../controllers/servicio/read.js";
import deleteById from "../controllers/servicio/delete.js";
import update from "../controllers/servicio/updateAll.js";
import Multer from "../middlewares/multer.js";
import uploadImage from "../services/firebase.cjs";

router.post('/new',create)
router.get('/',read)
router.delete('/:id', deleteById)
router.put('/:id',Multer.single('foto'), uploadImage, update)

export default router
