import express  from "express";
const router = express.Router()
import googleAccountVerify from "../controllers/google_calendar/googleAccountVerify.js";
import redirect from "../controllers/google_calendar/google_redirect.js";
import create from "../controllers/google_calendar/create.js";
import getAllEvents from "../controllers/google_calendar/read.js";
import isClient from "../middlewares/isClientChecker..js";
import passport from "passport";
import citaByPeluquero from "../controllers/google_calendar/findCitaBypeluquero.js";
import cancel from "../controllers/google_calendar/cancel.js";
import updateStatus from "../controllers/google_calendar/updateStatus.js";
import allPendings from "../controllers/google_calendar/getAllPendings.js";
import allDone from "../controllers/google_calendar/getAllDone.js";
router.get('/appoiment/:p_id',passport.authenticate('jwt', {session:false}), citaByPeluquero)
router.delete('/:id',passport.authenticate('jwt', {session:false}), cancel)
router.get('/',passport.authenticate('jwt', {session:false}), googleAccountVerify)
router.get('/redirect', redirect)
router.post('/new/appoiment',passport.authenticate('jwt', {session:false}),isClient, create)
router.get('/all-appoiments',passport.authenticate('jwt', {session:false}), getAllEvents)
router.patch('/appoiment/:c_id',passport.authenticate('jwt', {session:false}), updateStatus)
router.get('/pending/appoiments', allPendings)
router.get('/done/appoiments', allDone)
export default router