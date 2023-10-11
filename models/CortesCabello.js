import mongoose from "mongoose";

const shema = new mongoose.Schema({
    titulo:{type:String , required:true },
    descripcion:{type:String , required:true },
    foto:{type:String, required:true },
    peluqueroId:{type:Types.ObjectId , ref:'peluqueros', required: true}
},{
    timestamps: true
})


let collection = 'cortesDeCabellos'

const CorteCabello = mongoose.model(collection, shema)

export default CorteCabello