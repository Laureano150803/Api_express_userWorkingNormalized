import Cita from "../../models/Cita.js";

const allPendings = async(req, res)=>{
    try {
        const all = await Cita.find({status:'PENDING'})
       
        if (all.length ===0) {
            return res.status(200).json({
                status:200,
                success:true,
                Response:'there are not pending appoiments'
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

export default allPendings