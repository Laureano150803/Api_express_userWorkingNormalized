import Cita from "../../models/Cita.js";

const allPendings = async(req, res)=>{
    try {
        const all = await Cita.find({status:'PENDING'}).populate('cliente_id servicio_id ')
       
        if (all.length ===0) {
            return res.status(200).json({
                status:200,
                success:true,
                Response:[]
            })
        }
        return res.status(200).json({
            status:200,
            success:true,
            Response:all
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:500,
            success:false,
            Response:'Internal Server Error'
        })
    }
    
}

export default allPendings