import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nombre:{type:String, required:true},
    especialidad:{type:String, required:true}

},{
    timestamps: true
})

let collection = 'peluqueros'

let Peluquero =  mongoose.model(collection,schema)

export default Peluquero