import Pedido from '../../models/Pedido.js'

let borrar = async(req, res, next) =>{
    try {
        let borrado = await Pedido.findOneAndDelete({usuario_cc:req.body.usuario_cc, 
                                                    _id:req.body._id})
        if(borrado){
            return res.status(200).json({
                success:true,
                Response:borrado
            })
        }else{
            return res.status(404).json({
                success:false,
                Response: 'pedido no existente en la base de datos'
            })
        }
      
    } catch (error) {
       next(error)
    }
}

export default borrar
