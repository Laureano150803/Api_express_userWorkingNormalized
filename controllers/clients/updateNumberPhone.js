import Cliente from "../../models/Cliente.js";

let updatePhone = async(req, res, next)=>{
    try {
        let numberUpdated= await Cliente.findByIdAndUpdate(req.params.id, {telefono:req.body.telefono}, {new:true})
        if (numberUpdated) {
            return res.status(200).json({
                status:200,
                success:true,
                Response: numberUpdated
            })
        }
    } catch (error) {
        next()
        return res.status(400).json({
            status:400,
            success:false,
            Response: 'Bad request'
        })
    }
}
export default updatePhone