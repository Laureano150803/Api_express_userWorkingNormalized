import Cliente from '../models/Cliente.js'

let isClient = async(req, res, next)=>{
    try {
        const clientFound = await Cliente.findOne({user_id:req.user._id})
        if (!clientFound) {
            return res.status(400).json({
                status:400,
                success:false,
                Response:'Client does not exist'
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            status: 500,
            Response: 'Internal Server Error'
        });
    }
}
export default isClient