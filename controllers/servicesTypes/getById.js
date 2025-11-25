import Servicio from '../../models/Servicio.js'


const getById =async(req, res)=>{
    try {
        const services = await Servicio.find({serviceTypeId:req.params.id})
        if(services){
            return res.status(200).json({
                status:200,
                success:true,
                Response:services
            })
        }
    } catch (error) {
        return res.status(400).json({
            status:400,
            success:false,
            Response:'Bad Request'
        })  
    }
}

export default getById