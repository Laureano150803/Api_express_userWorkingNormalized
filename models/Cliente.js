import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nombre:{type:String, required:true},
    email:{type:String, required:true},
    telefono:{type:String, required:true}

    
},{
    timestamps: true
})

let collection = 'clientes'

let Cliente = mongoose.model(collection,schema)

export default Cliente 