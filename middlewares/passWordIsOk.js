import bcryptjs from 'bcryptjs';

async function passwordIsOk(req, res, next) {
  try {
    const db_pass = req.user.password;
    const form_pass = req.body.password;

    // Verificar que las contraseñas no sean nulas
    if (!db_pass || !form_pass) {
      return res.status(400).json({
        status: 400,
        Response: 'Password is missing'
      });
    }

    // Comparar las contraseñas utilizando async/await
    const passwordMatch = await bcryptjs.compare(form_pass, db_pass);

    if (passwordMatch) {
      return next();
    } else {
      return res.status(400).json({
        status: 400,
        Response: 'Wrong password'
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      Response: 'Internal server error'
    });
  }
}

export default passwordIsOk;
