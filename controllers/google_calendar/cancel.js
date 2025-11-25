import Cita from "../../models/Cita.js";


let cancel = async (req, res, next) => {
    try {
        const cita = await Cita.findByIdAndUpdate(req.params.id, { status: 'CANCELED' }, { new: true })
        if (cita) {

            return res.status(200).json({
                status: 200,
                success: true,
                Reponse: 'Cita has been Canceled'
            })

        }

    } catch (error) {
        return res.status(400).json({
            status: 400,
            success: false,
            Reponse: 'Cita not found'
        })
    }
}
export default cancel