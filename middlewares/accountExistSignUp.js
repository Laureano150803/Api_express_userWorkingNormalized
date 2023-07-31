import User from '../models/User.js'


async function accountExistsSignUp(req, res, next){
    const user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({
            status:400,
            Response:'User alredy exist'
        })
    }
    return next()
}

export default accountExistsSignUp