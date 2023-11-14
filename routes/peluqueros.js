import express  from "express";
const router = express.Router()
import create from "../controllers/peluqueros/create.js";
import read from "../controllers/peluqueros/read.js";
import deleteById from "../controllers/peluqueros/deleteById.js";
import updateById from "../controllers/peluqueros/updateById.js";
import getPeluquerosDisponibles from "../controllers/peluqueros/GetPeluquerosDisponibles.js";
import passport from "passport";
import uploadImage from "../services/firebase.cjs";
import Multer from "../middlewares/multer.js";
router.get('/:inicio', getPeluquerosDisponibles)
router.get('/', read)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteById)
router.post('/new',passport.authenticate('jwt', {session:false}),Multer.single("foto"),uploadImage, create )
router.put('/:id',/*  passport.authenticate('jwt', {session:false}), */ updateById )

export default router