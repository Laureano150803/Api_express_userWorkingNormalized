import Compra from '../models/Compra.js'
import Servicio from '../models/Servicio.js';


const contoller = {
    
    create: async (req,res,next) => {
        const { user } = req
        let servicio = await Servicio.findById(req.params.id)
        if(servicio){
            
            try {
                await Compra.create({
                    product_id: req.params.id,
                    user_id: user._id,
                    product_name: servicio.nombre,
                    cover_photo: servicio.foto,
                    price: servicio.precio,
                    quantity: 1
                })
                return res.status (201).json({menssage:'product added to purchase'})
            } catch (error) {
                next(error)
            }
        }
    },

    getall: async (req, res, next) => {
        const {user} = req
        try {
            let serivicios = await Compra.find({user_id: user._id})
            return res.status (200).json({serivicios})
        } catch (error) {
            next(error)
        }
    
    },
    update: async (req,res,next) => {
        try {
            let product = await Compra.findByIdAndUpdate(
                req.params.id,
                { quantity: req.body.quantity}
                )
            if (product){
                return res 
                    .status(200)
                    .json({
                        message: 'amount was updated',
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroyOne: async (req,res,next) => {
        try {
            let item = await Compra.findByIdAndDelete( req.params.id )
            if( item ){
                return res
                    .status(200)
                    .json({
                        message:'Item successfully deleted'
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroyAll: async (req,res,next) => {
        const { user } = req
        try {
            await Compra.deleteMany( { user_id: user._id})
            return res
                .status(200)
                .json({
                    message: 'Purchase successfully deleted'
                })
        } catch (error) {
            next(error)
        }
    }
}



export default contoller