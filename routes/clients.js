import express  from "express";
const router = express.Router()
import passport from "passport";
import create from "../controllers/clients/create.js";
import deleteByid from "../controllers/clients/deleteById.js";
import read from "../controllers/clients/read.js";
import updatePhone from "../controllers/clients/updateNumberPhone.js";
import cedulaAlredyExist from "../middlewares/cedulaAlredyExist.js";

router.post('/new',passport.authenticate('jwt', {session:false}),cedulaAlredyExist, create)
router.get('/',passport.authenticate('jwt', {session:false}), read)
router.patch("/:id",passport.authenticate('jwt', {session:false}), updatePhone)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteByid)
export default router