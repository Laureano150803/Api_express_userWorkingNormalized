import NormaComvivencia from "../../models/NormaComvivencia";

let deleteById = async(req,res,next) =>{
    try{
        let deleted = await NormaComvivencia.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            status:200,
            success:true,
            Response:`normsComvivencias: ${deleted.titulo} deleted successfully`
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