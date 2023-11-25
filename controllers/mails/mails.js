import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "hairfashion1314@gmail.com",
      pass: process.env.PASSWORD_EMAIL,
    },
  });
  transporter.verify().then(()=>{
    console.log('Ready for send emails')
  })

  const mailer= async (req, res)=>{
    const mail = await transporter.sendMail({
      from: '"Hairfashion Team 😜" <hairfashion1314@gmail.com>',
      to: req.body.email,
      subject: req.body.mensaje,
      html: `
        <div style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; text-align: center;">Hello ${req.body.nombre}!</h2>
            <p style="color: #555; text-align: justify;">
              Thank you for contacting Hairfashion! We are thrilled to receive your message and appreciate your interest in our services. Your satisfaction is our priority.
            </p>
            <p style="color: #555; text-align: justify;">
              We have received your request, and our dedicated team is already working on it. One of our administrators will contact you shortly to discuss any additional details and confirm the next steps.
            </p>
            <p style="color: #555; text-align: justify;">
              If you have any urgent questions or need immediate assistance, feel free to reply to this email or call us at 319-642-6103. We are here to help you.
            </p>
            <p style="color: #555; text-align: justify;">
              We appreciate the opportunity to serve you and look forward to providing you with an exceptional experience at Hairfashion.
            </p>
            <p style="color: #555; text-align: justify;">
              Thank you for choosing us!
            </p>
            <div style="text-align: center; margin-top: 20px;">
              <img src="https://cdn-icons-png.flaticon.com/256/8837/8837552.png" alt="Hairfashion" style="max-width: 100px; height: auto;">
            </div>
          </div>
        </div>
      `,
    });
    if(mail){
      return res.status(200).json({
        response:'Email enviado'
      })
    }else{
      return res.status(400).json({
        response:'Bad request'
      })
    }
  }

  export default mailer