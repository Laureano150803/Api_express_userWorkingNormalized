/* import mongoose from "mongoose";
mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONECTION)
.then(()=>console.log('Conectado a mongo'))
.catch(err => console.warn(err)) */

import mongoose from "mongoose";

mongoose.connect(process.env.CONECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.warn(err));
