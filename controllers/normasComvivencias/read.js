import normasComvivencias from '../../models/NormaComvivencia'

let read = async(req,res,next) =>{
    try{
        let allnormasComvivencias = await normasComvivencias.find()
        return res.status(200).json({
            status:200,
            success:true,
            Response:allnormasComvivencias
        })
    }catch (error) {
        next()
        return res.status(400).json({
            status:400,
            success:false,
            Response:'Bad request'
        })
    }
}

export default read 