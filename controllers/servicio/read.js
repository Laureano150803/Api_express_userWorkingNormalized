import Servicio from "../../models/Servicio.js";

let read = async(req,res,next) =>{
    try {
        let allService = await Servicio.find()
        .populate('serviceTypeId')
        if(allService){
            return res.status(200).json({
                status:200,
                success:true,
                Response:allService
            })
        }else{
            return res.status(400).json({
                status:400,
                success:false,
                Response:'Bad request'
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:500,
            success:false,
            Response:'Internal Server Error'
        })
    }
}

export default read 