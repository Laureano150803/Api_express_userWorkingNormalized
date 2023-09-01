import mongoose, { Types } from "mongoose";


const citaSchema = new mongoose.Schema({
  calendario_id:{type:String, required:true},
  summary:{type:String, required:true},
  description:{type:String, required:true},
  inicio:{type:String, required:true},
  fin:{type:String, required:true},
  status:{type:String, required:true},
  cliente_id:{type:Types.ObjectId, ref:'clientes', required:true},
  peluquero_id:{type:Types.ObjectId, ref:'peluqueros', required:true}
}, {
    timestamps: true
});
let collection = 'citas'

const Cita = mongoose.model(collection, citaSchema);

export default Cita;

