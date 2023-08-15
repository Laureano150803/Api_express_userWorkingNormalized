import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({
    facturaId:{type:Types.ObjectId , ref:'facturas' ,required:true},
    metodo_pago:{type:String , required:true },
    monto:{type:Number, required:true}
},{
    timestamps: true
})

let collection = 'pagos'
let Pago = mongoose.model(collection, schema)

export default Pago