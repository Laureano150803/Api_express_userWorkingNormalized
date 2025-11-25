import Cita from "../../models/Cita.js";

const allDone = async(req, res)=>{
    try {
        const all = await Cita.find({status:'DONE'}).populate('servicio_id')
       
        if (all.length ===0) {
            return res.status(200).json({
                status:200,
                success:true,
                Response:'there are not done appoiments'
            })
        }
        return res.status(200).json({
            status:200,
            success:true,
            Response:all
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            success:false,
            Response:'Internal Server Error'
        })
    }
    
}

export default allDone