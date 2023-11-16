import Servicio from "../../models/Servicio.js";
 let update = async(req,res,next) =>{
    try{
        let updateAll = await Servicio.findByIdAndUpdate(req.params.id , req.body,{new:true} )
    if(updateAll){
        return res.status(200).json({
            status:200,
            success:true,
            Response: 'the title was successfully updated'
        })
    }
    
    }catch(error){
      console.log(error)
        return res.status(400).json({
            status:400,
            success:false,
            Response: 'Bad request'
        })

     }
 }

 export default update