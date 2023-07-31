import mongoose from "mongoose";
import 'dotenv/config.js'
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://antonio:antonio123@antonio.jret2ek.mongodb.net/')
.then(()=>console.log('Conectado a mongo'))
.catch(err => console.warn(err)) 


