import  express  from "express";
import mailer from "../controllers/mails/mails.js";
const router = express.Router()
import passport from "passport";

router.post('/contact'/* ,passport.authenticate('jwt', {session:false}) */, mailer)


export default router