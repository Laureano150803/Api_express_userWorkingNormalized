import Peluquero from "../../models/Peluquero.js";
import User from "../../models/User.js";
let deleteById = async(req, res, next)=>{
    try {
        const deleted = await Peluquero.findByIdAndDelete(req.params.id)
        if (deleted) {
            await User.findByIdAndDelete(deleted.user_id)
            return res.status(200).json({
                status:200,
                success:true,
                Response:`Peluquero ${deleted.nombre} ha sido eliminado`
            })
        }else{
            return res.status(400).json({
                status:400,
                success:false,
                Response:`Peluquero Not Found`
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:500,
            success:false,
            Response:`Internal Server Error`
        })
    }
}
export default deleteById