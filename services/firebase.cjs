const admin =  require("firebase-admin");
const serviceAccount = require("../config/hair-fashion-33a64-firebase-adminsdk-kjs8x-bf3bbf4f0a.json");
const BUCKET = "hair-fashion-33a64.appspot.com";

admin.initializeApp({
 credential:admin.credential.cert(serviceAccount),
 storageBucket: BUCKET
})

const bucket = admin.storage().bucket()

const uploadImage = async(req,res,next)=>{
    console.log(req.file)

    if (!req.file) return next()
    const foto = req.file
    const nameFile = Date.now()+'.'+ foto.originalname.split('.').pop()
    const file = bucket.file(nameFile)
    const stream = file.createWriteStream({

        metadata:{
            contentType:foto.mimetype
        }
    })
    stream.on('error', (e)=>{
        console.log(e)
    })
    stream.on('finish', async()=>{
        await file.makePublic()
        req.file.firebaseUrl =`https://storage.googleapis.com/${BUCKET}/${nameFile}`
        req.body.foto = req.file.firebaseUrl 
        next()
    })
    stream.end(foto.buffer)

    
}

module.exports = uploadImage