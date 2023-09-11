import auth2Client from '../../config/authGoogle.js'


const SCOPES = [process.env.SCOPES];
function googleAccountVerify(req, res, next){
    const url = auth2Client.generateAuthUrl({
        access_type:'offline',
        scope:SCOPES
    })
    res.status(200).json({
        success:true,
        redirect:url
    })
}

export default googleAccountVerify