import mongoose, { Types } from "mongoose";

 const disponibilidadSchema = new mongoose.Schema({
    inicio: { type: Date, required: true },
    fin: { type: Date, required: true }
}); 

let collection = 'disponibilidad_laboral'

let Disponibilidad = mongoose.model(collection, disponibilidadSchema)

export default Disponibilidad