import Cita from "../../models/Cita.js";

let updateStatus = async(req, res)=>{
    try {
        const upd = await Cita.findByIdAndUpdate(req.params.c_id, {status:'DONE'}, {new:true})
        if(upd){
            return res.status(200).json({
                status:200,
                success:true,
                Reponse:upd
            })
        }
    } catch (error) {
        return res.status(400).json({
            status:400,
            success:false,
            Reponse:'Opp, something went wrong'
        })
    }
   
}   

export default updateStatus