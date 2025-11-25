import auth2Client from '../../config/authGoogle.js'

async function redirect(req, res) {
    try {
        const code = req.query.code
        const { tokens } = await auth2Client.getToken(code)
        auth2Client.setCredentials(tokens)
        res.render('aprobated')
    } catch (error) {
        res.render('notAprobed')
    }

}

export default redirect