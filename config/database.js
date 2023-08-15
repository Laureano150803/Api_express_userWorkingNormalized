import mongoose from "mongoose";
import 'dotenv/config.js'
mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONECT)
.then(()=>console.log('Conectado a mongo'))
.catch(err => console.warn(err)) 


