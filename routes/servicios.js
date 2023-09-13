import  Express from "express";
const router = express.Router()
import create from "../controllers/servicio/create.js";
import read from "../controllers/servicio/read.js";
import deleteById from "../controllers/servicio/delete.js";
import update from "../controllers/servicio/updateAll.js";

router.post('/newService',create)
router.get('/',read)
router.delete('/:id', deleteById)
router.put('/:id',update)
