import Cita from "../../models/Cita.js";

let getAllEvents=async(req, res, next)=>{
    try {
        let all = await Cita.find()
        return res.status(200).json({
            status:200,
            success:true,
            Response:all
        })
    } catch (error) {
        return res.status(400).json({
            status:400,
            success:false,
            Response:"Bad request"
        })
    }
}
export default getAllEvents