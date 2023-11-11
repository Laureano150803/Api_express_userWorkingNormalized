import express from 'express';
import passport from 'passport';
import contoller from '../controllers/purchase.js';


const { create, getall, update, destroyOne, destroyAll } = contoller


const router = express.Router();

router.post('/:id', passport.authenticate('jwt', {session: false}), create);
router.get("/", passport.authenticate('jwt', {session:false}), getall);
router.put('/:id', passport.authenticate('jwt',{ session: false}), update )
router.delete("/:id", passport.authenticate('jwt', {session:false}), destroyOne);
router.delete('/', passport.authenticate('jwt', { session: false}), destroyAll )
// router.post('/:id',create);


export default router