import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    stock:{type:Number, required:true},
    cost:{type:Number, required:true},
    Price:{type:Number, required:true}
},
{
    timestamps:true
})
let collection = 'products'
let Product = mongoose.model(collection, schema)

export default Product