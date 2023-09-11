import express  from "express";
const router = express.Router()
import create from "../controllers/peluqueros/create.js";
import passport from "passport";

router.post('/new',passport.authenticate('jwt', {session:false}), create )

export default router