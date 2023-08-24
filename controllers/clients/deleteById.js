import Cliente from '../../models/Cliente.js'
import User from '../../models/User.js'

let deleteByid = async (req,res,next)=>{

    try {
        const user_id = req.user._id
        const client_id = req.params.id
    
        let deleted = await Cliente.findByIdAndDelete(client_id)
    
        if(deleted){
            await User.findByIdAndDelete(user_id)

            return res.status(200).json({
                status:200,
                success:true,
                Response:`Cliente: ${deleted.nombre} borrado exitosamente`
            })
        } 
    } catch (error) {
        next()
        return res.status(400).json({
                status:400,
                success:false,
                Response:`oppps`
            })
    }
    
   
}
export default deleteByid