import Servicio from '../../models/Sevicio.js'

let createService =  async(req,res,next) =>{
    try{
    let newService = await Servicio.create(req.body)

        return res.status(201).json({
            status:201,
            success:true,
            Response:`
            Service ${newService.titulo} successfully created`
        })
    }
    catch(error){
        next(error)
        return res.status(400).json({
            status:400,
            success:false,
            Response:`Could not create service `
        })

    }


}

export default createService  

