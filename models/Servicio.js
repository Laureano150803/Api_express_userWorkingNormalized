import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({
nombre:{type:String , required:true },
descripcion:{type:String , required:true },
precio:{type:Number, required:true },
serviceTypeId:{type:Types.ObjectId, ref:'servicesTypes',  required:true }
},{
    timestamps: true
})


let collection = 'servicios'
let Servicio = mongoose.model(collection,schema)

export default Servicio