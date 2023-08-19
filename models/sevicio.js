import mongoose from "mongoose";

const schema = new mongoose.Schema({
    titulo:{type:String , required:true },
    descripcion:{type:String , required:true },
    precio:{type:Number, required:true },
},{
    timestamps: true
})

let collection = 'servicios'
let Servicio = mongoose.model(collection,schema)

export default Servicio