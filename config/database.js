import mongoose from "mongoose";
mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONECTION)
.then(()=>console.log('Conectado a mongo'))
.catch(err => console.warn(err))
