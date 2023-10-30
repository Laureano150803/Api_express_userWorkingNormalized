import Servicio from "../../models/Servicio.js";
 let update = async(req,res,next) =>{
    try{
        let updateAll = await Servicio.findByIdAndUpdate(req.params.id , {titulo:req.body.titulo,descripcion:req.body.descripcion,precio:req.body.precio},{new:true} )
    if(updateAll){
        return res.status(200).json({
            status:200,
            success:true,
            Response: 'the title was successfully updated'
        })
    }
    
    }catch(error){
        next()
        return res.status(400).json({
            status:400,
            success:false,
            Response: 'Bad request'
        })

     }
 }

 export default update