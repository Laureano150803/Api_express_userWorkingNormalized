import express from 'express'
const router = express.Router()
import create from '../controllers/horario/create.js'
import passport from 'passport'

router.post('/',passport.authenticate('jwt', {session:false}), create)

export default router