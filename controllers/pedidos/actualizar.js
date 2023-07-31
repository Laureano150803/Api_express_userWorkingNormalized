import Pedido from '../../models/Pedido.js'

let actualizar = async(req, res, next) =>{

    let  pedido =await Pedido.findOne({usuario_cc:req.body.usuario_cc,
                                        _id:req.body._id})
    if(pedido){
            try {
            let cedula = pedido.usuario_cc
            await Pedido.findOneAndUpdate({usuario_cc:cedula,
                                            estado:req.body.estado  })
        return res.status(200).json({
            success:true,
            Response:'estado actualizado!!'
        })
    } catch (error) {
       next(error)
    }
    }else{
        res.status(401).json({
            success: false,
            Response: 'Pedido no encontrado'
        })
    }


}

export default actualizar
