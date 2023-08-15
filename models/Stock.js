import mongoose from "mongoose";

const schema = new mongoose.Schema({
    productoId:{type:Number , required:true},
    cantidad_disponble:{type:Number, required:true}

},{
    timestamps: true
})

let collection='stocks'
let Stock = mongoose.model(collection,schema)

export default Stock