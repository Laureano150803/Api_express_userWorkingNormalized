import ServicesTypes from "../../models/servicesTypes.js";
const read = async(req, res)=>{
    try {
        const type = await ServicesTypes.find()
        if(type){
            return res.status(200).json({
                status:200,
                success:true,
                Response:type
            })
        }
    } catch (error) {
        return res.status(400).json({
            status:400,
            success:false,
            Response:'Bad request'
        })
        
    }
   
}
export default read