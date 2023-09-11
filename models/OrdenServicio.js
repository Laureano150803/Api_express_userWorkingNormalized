import mongoose, { Types } from "mongoose";

const schema =  new mongoose.Schema({
    clienteId:{type:Types.ObjectId ,ref:'clientes',required:true},
    peluquero:{type:Types.ObjectId , ref:'peluqueros', required: true},
    fecha:{type:Date , required:true },
    estado:{type:String , required:true }
},{
    timestamps: true
})

let collection = 'ordenServicios'

let OrdenServicio =  mongoose.model( collection, schema)

export default OrdenServicio