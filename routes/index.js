import express from 'express'
const router = express.Router();
import router_usuarios from './users.js'
import router_clientes from './clients.js'
import google_router from './google_calendar.js'
import peluqueros_router from './peluqueros.js'
import servicio_router from './servicios.js'
import servicesTyperRouter from './servicesTypes.js'
import comprasRouter from './compras.js'
import paymentsRouter from './payments.js'
import  checktoken from './checktoken.js'
import passport from 'passport';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', router_usuarios)
router.use('/clients', router_clientes)
router.use('/google', google_router)
router.use('/peluqueros', peluqueros_router)
router.use('/services', servicio_router)
router.use('/types', servicesTyperRouter)
router.use('/purchase',comprasRouter)
router.use('/payment', paymentsRouter)
router.get('/auth',passport.authenticate('jwt', {session:false}), checktoken)
export default router
