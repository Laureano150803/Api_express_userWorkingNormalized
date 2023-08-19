import mongoose, { Types } from "mongoose";

const citaSchema = new mongoose.Schema({
    estado:{type:String, required:true},
    peluquero_id: { type: Types.ObjectId, ref: 'peluqueros', required: true },
    cliente_id: { type: Types.ObjectId, ref: 'clientes', required: true },
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    servicio_id:{type:Types.ObjectId, ref:'servicios', required:true},
    detaller:{type:String, required:false}
}, {
    timestamps: true
});
let collection = 'citas'

const Cita = mongoose.model(collection, citaSchema);

export default Cita;