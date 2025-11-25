import mongoose from "mongoose";

let schema = new mongoose.Schema({
  user_id: {type: mongoose.Types.ObjectId, ref: 'users', required: true},
  product_id: {type: mongoose.Types.ObjectId, ref: 'serivicios', required: true},
  product_name: {type: String, required: true},
  cover_photo: {type: String, required: false},
  price:{type: Number, required: true},
  quantity:{type: Number, required: true}
},
{
  timestamps: true,
  versionKey: false
})

let collection = 'compras'

let Compra = mongoose.model(collection, schema)
export default Compra