import Pedido from '../../models/Pedido.js'
import Usuario from '../../models/Usuario.js'
let agregar = async(req, res, next) =>{

    let usuario= await Usuario.findOne({cc:req.body.usuario_cc})
    try {
       
        if(usuario){
            let pedido = req.body
            pedido.usuario_id = usuario._id
            let nuevo_pedido = await Pedido.create(pedido)
             return res.status(200).json({
            success:true,
            Response:nuevo_pedido
        })
        }else{
            return res.status(404).json({
                success:false,
                Response:'USuar invalidos'
            })
        }
      
    } catch (error) {
    console.log('cedula de usuario invalida' )
       next(error)
    }
}

export default agregar