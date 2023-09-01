import Cita from "../../models/Cita.js";
import { google } from "googleapis";
import auth2Client from "../../config/authGoogle.js";
const calendar = google.calendar({
    version : 'v3',
    auth:process.env.GOOGLE_CALENDAR_API
  });

let cancel =async(req, res, next)=>{
    try {
        const cita = await Cita.findByIdAndDelete(req.params.id)
        if (cita) {
           const calendardeleted = await calendar.events.delete({
                calendarId:'primary',
                auth:auth2Client,
                eventId:cita.calendario_id
            }) 
            if (calendardeleted) {
                return res.status(200).json({
                    status:200,
                    success:true,
                    Reponse:'Cita has been deleted'
                })
            }
        }
       
    } catch (error) {
        return res.status(400).json({
            status:400,
            success:false,
            Reponse:'Cita not found'
        })
    }
}
export default cancel