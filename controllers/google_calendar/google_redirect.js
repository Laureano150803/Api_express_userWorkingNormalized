import auth2Client from '../../config/authGoogle.js'

async function redirect(req, res){
    const code = req.query.code
    const {tokens} = await auth2Client.getToken(code)
    auth2Client.setCredentials(tokens)
}

export default redirect