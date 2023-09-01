import express from 'express'
const router = express.Router();
import router_usuarios from './users.js'
import router_clientes from './clients.js'
import google_router from './google_calendar.js'
import peluqueros_router from './peluqueros.js'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', router_usuarios)
router.use('/clients', router_clientes)
router.use('/google', google_router)
router.use('/peluqueros', peluqueros_router)
export default router
