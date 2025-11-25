import mercadopago from 'mercadopago';

const payments = async (req, res, next) => {
  let { unit_price, nombre } = req.body;

  mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });
  const preference = {
    items: [
      {
        title: nombre,
        unit_price: unit_price,
        quantity: 1,
        currency_id: 'COP',
      },
    ],
    additional_info: JSON.stringify({
      cita: req.body.cita,
    }),
    back_urls: {
      success: `http://localhost:5173/your-appointment`,
      failure: 'http://localhost:5173/',
      pending: '',
    },
    auto_return: 'approved',
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      // Parsea la cadena JSON antes de intentar acceder a sus propiedades
      const additionalInfoObj = JSON.parse(preference.additional_info);

      res.status(200).json({
        response,
        preferenceId: response.body.id,
        cita: additionalInfoObj.cita,
      });
    })
    .catch((err) => console.log(err));
};

export default payments;
