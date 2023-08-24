import Disponibilidad from "../../models/horarioLaboral.js";

let create = async (req, res, next) => {
    try {
        const { inicio, fin } = req.body;

        const nuevaDisponibilidad = await Disponibilidad.create({
            inicio: new Date(inicio),
            fin: new Date(fin)
        });

        if (nuevaDisponibilidad) {
            return res.json({
                success: true,
                disponibilidad: nuevaDisponibilidad
            });
        } else {
            return res.json({
                success: false,
                message: "No se pudo crear la disponibilidad"
            });
        }
    } catch (error) {
        console.error("Error al crear la disponibilidad:", error);
        return res.json({
            success: false,
            message: "Ocurrió un error al crear la disponibilidad"
        });
    }
}

export default create;