import Cita from '../../models/Cita.js'
import Cliente from '../../models/Cliente.js'
const citaByCliente = async (req, res, next) => {
    try {
        const cliente = await Cliente.findOne({user_id:req.user.id})
        const citas = await Cita.find({ cliente_id: cliente._id , status:'PENDING'})
            .populate('servicio_id cliente_id');
         // Usar populate para cargar los detalles de Cliente y cliente
        if (citas) {
            return res.status(200).json({
                status: 200,
                success: true,
                response:citas
            });
        } else {
            return res.status(404).json({
                status: 404,
                success: false,
                response: 'El Cliente no tiene citas'
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 500,
            success: false,
            response: 'Ocurrió un error en el servidor'
        });
    }
}

export default citaByCliente;