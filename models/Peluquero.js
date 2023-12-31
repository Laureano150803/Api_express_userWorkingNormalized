import mongoose, { Types } from "mongoose";


const schema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    user_id: { type: Types.ObjectId, ref: 'users', required: true }
}, {
    timestamps: true
});

let collection= 'peluqueros'

const Peluquero = mongoose.model(collection, schema);

export default Peluquero;

