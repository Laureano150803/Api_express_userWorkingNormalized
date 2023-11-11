import normasComvivencias from '../../models/NormaComvivencia.js'

let create =  async(req,res,next) => {
    try{
        let createnormasComvivencias = await normasComvivencias.create(req.body) 
         return res.status(201).json({
             status:201,
             success:true,
             Response:`normsComvivencias ${createnormasComvivencias.titulo} successfully created`
         })

    }catch(error){
        next(error)
        return res.status(400).json({
            status:400,
            success:false,
            Response:`could not create the rule of coexistence `
        })

    }
}

export default create 