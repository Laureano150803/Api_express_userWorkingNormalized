import Cita from '../../models/Cita.js'
import { google } from 'googleapis'
import dayjs from 'dayjs'
import Cliente from '../../models/Cliente.js'
import auth2Client from '../../config/authGoogle.js';
import Peluquero from '../../models/Peluquero.js'
const calendar = google.calendar({
    version : 'v3',
    auth:process.env.GOOGLE_CALENDAR_API
  });

let create = async(req, res, next)=>{
    const fechaFinal = dayjs(req.body.inicio).add(2, 'hour')
  
    const event = {
      summary: 'Cita con AirFashion',
      description: req.body.description,
      start:{
        dateTime: dayjs(req.body.inicio).toISOString(),
        timeZone: "America/Bogota"
      },
      end:{
        dateTime: fechaFinal.toISOString(),
        timeZone: "America/Bogota"
      }
    }
        
    try {
      const createdCalendar = await calendar.events.insert({
        calendarId:'primary',
        auth:auth2Client,
        requestBody:event
       })

      const peluquero = await Peluquero.findById(req.body.peluquero_id)
      if (peluquero) {
        const cliente = await Cliente.findOne({user_id:req.user._id})
        req.body.cliente_id = cliente._id
        req.body.calendario_id = createdCalendar.data.id 
        req.body.summary = 'Cita con AirFashion'
        req.body.fin = fechaFinal
        req.body.status = 'PENDING'
      
    
        const one = await Cita.create(req.body)
  
        if(createdCalendar && one){
          return res.status(201).json({
            status:201,
            success:true,
            calendar:createdCalendar.data.id,
            cita:one
          })
        }
      }else{
        return res.status(400).json({
          status:400,
          success:false,
          Response:'Bad request'
        })
      }
     
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status:500,
        success:false,
        calendar:null,
        cita:null,
        Response:'Internal Server error'
      })

    }
}

export default create