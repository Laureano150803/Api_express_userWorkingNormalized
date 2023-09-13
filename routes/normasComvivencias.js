import  Express  from "express";
const router = express.Router()
import create from "../controllers/normasComvivencias/cerate";
import deleteById from "../controllers/normasComvivencias/delete";
import read from "../controllers/normasComvivencias/read";
import updateAll from "../controllers/normasComvivencias/updateAll";
router.post('/new' , create)
router.delete('/:id',deleteById )
router.get('/',read)
router.put('/:id' , updateAll)