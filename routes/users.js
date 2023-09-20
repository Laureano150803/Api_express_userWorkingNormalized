
import express  from 'express';
const router = express.Router();
import signUp from '../controllers/users/signUp.js';
import accountExistsSignUp from '../middlewares/accountExistSignUp.js';
import accountSignIn from '../middlewares/accountSignIn.js';
import singIn from '../controllers/users/signIn.js'
import passwordIsOk from '../middlewares/passWordIsOk.js';
import passport from '../middlewares/passport.js'
import signout from '../controllers/users/signout.js';
import validator from '../middlewares/validator.js';
import { userCreateSignIn, userCreateSignUp } from '../schemas/usersSign.js';
router.post('/signup',validator(userCreateSignUp),accountExistsSignUp,  signUp)
router.post('/signin',/* validator(userCreateSignIn), */accountSignIn,passwordIsOk, singIn)
router.post('/signout',passport.authenticate('jwt', {session:false}), signout)





export default router
