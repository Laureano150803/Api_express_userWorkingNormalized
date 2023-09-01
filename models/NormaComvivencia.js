import mongoose from "mongoose";

const shema = new mongoose.Schema({
    titulo:{type:String , required:true },
    descripcion:{type:String , required:true }
},{
    timestamps: true
})

let collection = 'normasComvivencias'

const NormaComvivencia = mongoose.model(collection, shema)

export default NormaComvivencia