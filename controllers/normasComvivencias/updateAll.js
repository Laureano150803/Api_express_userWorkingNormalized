import NormaComvivencia from "../../models/NormaComvivencia";

let updateAll = async(req,res,next)=>{
    try{
        let updateAll = await NormaComvivencia.findByIdAndUpdate(req.params.id , {titulo:req.body.titulo,descripcion:req.body.descripcion},{new:true} )
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

export default updateAll