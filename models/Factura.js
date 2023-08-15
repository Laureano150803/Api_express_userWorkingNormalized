import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({
    clienteId:{type:Types.ObjectId,ref: 'clientes' , required:true},
    fecha:{type:Date, required:true},
    total:{type:Number, required:true }
},{
    timestamps: true
})

let collection = 'facturas'

let Factura =  mongoose.model(collection, schema)

export default Factura 