import express from "express";
const router = express.Router()
import read from "../controllers/servicesTypes/read.js";

router.get('/', read)


export default router