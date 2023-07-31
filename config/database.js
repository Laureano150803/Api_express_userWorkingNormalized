import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const conexion = process.env.CONECTION
console.log(typeof(conexion))
mongoose.connect(conexion)
.then(()=>console.log('Conectado a mongo'))
.catch(err => console.warn(err)) 


