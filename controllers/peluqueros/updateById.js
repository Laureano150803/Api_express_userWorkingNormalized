import Peluquero from "../../models/Peluquero.js";

let updateById = async(req, res, next)=>{
    try {
        const updated = await Peluquero.updateById(req.params.id, req.body,  {new:true})
        if (updated) {
            return res.status(200).json({
                status:200,
                success:true,
                Response:`Peluquero ${updated.nombre} ha sido eliminado`
            })
        }else{
            return res.status(400).json({
                status:400,
                success:false,
                Response:`Peluquero Not Found`
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:500,
            success:false,
            Response:`Internal Server Error`
        })
    }
}
export default updateById