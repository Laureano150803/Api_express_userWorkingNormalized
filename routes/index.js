import express from 'express'
const router = express.Router();
import router_usuarios from './users.js'
import router_clientes from './clients.js'
import router_horario from './horarioLaboral.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', router_usuarios)
router.use('/clients', router_clientes)
router.use('/horario', router_horario)
export default router
