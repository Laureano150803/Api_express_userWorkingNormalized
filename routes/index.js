import express from 'express'
const router = express.Router();
import router_usuarios from './users.js'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', router_usuarios  )

export default router
