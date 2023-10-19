import Servicio from "../../models/Sevicio.js";

let read = async(req,res,next) =>{
    try{
        let allService = await Servicio.find()
        return res.status(200).json({
            status:200,
            success:true,
            Response:allService
        })
    }catch (error) {
        next()
        return res.status(400).json({
            status:400,
            success:false,
            Response:'Bad request'
        })
    }
}

export default read 