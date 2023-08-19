import mongoose, { Types } from "mongoose";

const disponibilidadSchema = new mongoose.Schema({
    diaSemana: { type: Number, required: true },
    inicio: { type: String, required: true },
    fin: { type: String, required: true }
}, {
    _id: false
});

const schema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    disponibilidad_general: [disponibilidadSchema],
    user_id: { type: Types.ObjectId, ref: 'users', required: true }
}, {
    timestamps: true
});

let collection= 'peluqueros'

const Peluquero = mongoose.model(collection, schema);

export default Peluquero;