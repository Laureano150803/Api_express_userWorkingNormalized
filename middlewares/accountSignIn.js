import User from '../models/User.js'

async function accountSignIn(req, res, next){
    const user = await User.findOne({email: req.body.email})
    if(user){
        req.user ={
            id: user._id,
            email:user.email,
            photo:user.photo,
            password: user.password,
            role: user.role
        }
        return next()
    }
    return res.status(400).json({
        status:400,
        success:false,
        Response:'user does not exist'
    })
}
export default accountSignIn