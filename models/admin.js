import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nombre:{type:String, required:true},
    email: {type: String, required: true},
    password: {type: String, required: true}
},{
    timestamps: true
})

let collection = 'admin'

let admin =  mongoose.model(collection,schema)

export default admin