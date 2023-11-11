import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name:{type:String, required:true},
    foto:{type:String, required:true}
},{timestamps:true})
let collection = 'servicesTypes'
const ServicesTypes = mongoose.model(collection, schema)

export default ServicesTypes