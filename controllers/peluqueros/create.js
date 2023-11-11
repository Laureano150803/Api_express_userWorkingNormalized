import Peluquero from "../../models/Peluquero.js"
import User from '../../models/User.js'



let create = async(req, res, next)=>{

    try {
         const user = await User.findOneAndUpdate({email:req.body.email},{role:2},{new:true})
        
         req.body.user_id = user._id
         const{firebaseUrl} = req.file || ''
         req.body.foto = firebaseUrl
        let one = await Peluquero.create(req.body)
        
        return res.status(201).json({
            status:201,
            success:true,
            Response:`Usuario ${one.nombre} creado exitosamente`
    }) 
        
    } catch (error) {
        next(error)
        return res.status(400).json({
            status:400,
            success:false,
            Response:`oppsss`
    })
    }

}

export default create