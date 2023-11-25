import Cita from "../../models/Cita.js";

const citaOfpelureos = async(req, res)=>{
    try {
        const citas = await Cita.find({ peluquero_id:req.params.id})
        .populate('servicio_id cliente_id');
        if(citas){
            return res.status(200).json({
                status: 200,
                success: true,
                response:citas
            });
        }else {
            return res.status(404).json({
                status: 404,
                success: false,
                response: 'El peluquero no tiene citas'
            });
        }
        
    } catch (error) {
        res.status(500).json({
            response:'Internal server error'
        })
    }

}

export default citaOfpelureos