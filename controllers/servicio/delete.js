import Servicio from "../../models/Sevicio.js";

let deleteById = async(req,res,next) =>{
    try{
      let deleted =  await Servicio.findByIdAndDelete(req.params.id)
      
      return res.status(200).json({
        status:200,
        success:true,
        Response:`Cliente: ${deleted.nombre} borrado exitosamente`
    })
    }catch(error){
        next()
        return res.status(400).json({
                status:400,
                success:false,
                Response:`oppps`
            })
    }
}
export default deleteById
 