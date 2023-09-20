import Peluquero from '../../models/Peluquero.js'

let read = async(req, res)=>{
    try {
        const all = await Peluquero.find()
        if(all){
            return res.status(200).json({
                status:200,
                success:true,
                Response:all
            })
        }else{
            return res.status(400).json({
                status:400,
                success:false,
                Response:[]
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:500,
            success:false,
            Response:'Internal Server Error'
        })
    }
}
export default read