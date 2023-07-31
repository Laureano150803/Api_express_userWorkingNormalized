import Pedido from '../../models/Pedido.js'

let listar_todo = async(req, res, next) =>{
    try {
        let all = await Pedido.find()
        return res.status(200).json({
            pedidos:all
        })
    } catch (error) {
       console.log(`error al cargar todos los pedidos ${error}`)
    }
}

export default listar_todo