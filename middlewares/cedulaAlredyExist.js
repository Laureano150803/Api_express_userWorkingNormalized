import Cliente from '../models/Cliente.js'

let cedulaAlredyExist = async (req, res, next)=>{
    try {
        const cedula= req.body.cedula
        let usuarioEncontrado = await Cliente.findOne({cedula})

        if(usuarioEncontrado){
            return res.status(400).json({
                status:400,
                success:false,
                Response:'Client already exist'
                })
        }
        next()
    } catch (error) {
        next(error)
    }
    
}

export default cedulaAlredyExist