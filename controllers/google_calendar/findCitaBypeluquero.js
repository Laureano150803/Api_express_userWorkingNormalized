import Cita from '../../models/Cita.js'
import Peluquero from '../../models/Peluquero.js'
const citaByPeluquero = async (req, res, next) => {
    try {
        const peluquero = await Peluquero.findOne({user_id:req.user.id})
        const citas = await Cita.find({ peluquero_id: peluquero._id})
            .populate('servicio_id cliente_id');
         // Usar populate para cargar los detalles de peluquero y cliente
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
                response: 'El peluquero no tiene citas'
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

export default citaByPeluquero;