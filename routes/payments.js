import { Router } from 'express';
import passport from '../middlewares/passport.js';
import mercadopagoController from "../controllers/payments/payments.js";
import create from '../controllers/google_calendar/create.js';
import isClient from '../middlewares/isClientChecker..js';
const router = Router();

// Ruta para procesar una donación
router.post('/',passport.authenticate("jwt",{session:false}),mercadopagoController);

export default router