import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nombre:{type:String , required:true },
    descripcion:{type:String , required:true },
    precio:{type:Number, required:true },
    cantidad:{type:Number, required:true }
    
},{
    timestamps: true
})

let collection = 'productos'

let Producto = mongoose.model(collection, schema)

export default Producto