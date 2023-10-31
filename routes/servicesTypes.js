import express from "express";
const router = express.Router()
import read from "../controllers/servicesTypes/read.js";
import getById from "../controllers/servicesTypes/getById.js";

router.get('/', read)
router.get('/:id', getById)


export default router