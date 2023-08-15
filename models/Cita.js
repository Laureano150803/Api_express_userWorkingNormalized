import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({
    fecha:{type:Date , required:true},
    lugar:{type:String , required:true},
    clienteId:{type:Types.ObjectId ,ref:'clientes',required:true},
    peluqueroId:{type:Types.ObjectId , ref:'peluqueros', required: true},
    estado:{type:String , required:true}


},{
    timestamps: true
})

let collection = 'citas'
let Cita = mongoose.model(collection,schema)

export default Cita