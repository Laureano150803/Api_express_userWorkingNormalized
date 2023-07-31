import mongoose from "mongoose";

let schema = new mongoose.Schema({
name:{type:String, required:true},
address:{type:String, required:true},
phone:{type:String, required:true},
contact_name:{type:String, required:true},
nit:{type:String, required:false}
},
{
    timestamps:true
})
let collection = 'clients'
let Client = mongoose.model(collection, schema)

export default Client