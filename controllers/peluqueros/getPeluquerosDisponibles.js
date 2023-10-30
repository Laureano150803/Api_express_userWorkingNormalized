import Peluquero from "../../models/Peluquero.js";
import Cita from "../../models/Cita.js";

const getPeluquerosDisponibles = async (req, res) => {
  const selectedhour = req.params.inicio;
  try {
    const citasEnHoras = await Cita.find({
      inicio: selectedhour,
      status: 'PENDING'
    }).select('peluquero_id -_id');

    const peluquerosOcupados = [...citasEnHoras.map(cita => cita.peluquero_id)];

    const ocupados = peluquerosOcupados.map(id => id.toString());

    const todosLosPeluqueros = await Peluquero.find();

    // Filtrar los peluqueros que no están ocupados
    const peluquerosDisponibles = todosLosPeluqueros.filter(peluquero => !ocupados.includes(peluquero._id.toString()));


    res.status(200).json({
      success: true,
      Response: peluquerosDisponibles
    });
  } catch (error) {
    console.error('Error al obtener peluqueros disponibles', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default getPeluquerosDisponibles;
