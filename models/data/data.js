import 'dotenv/config.js'
import '../../config/database.js'
import {users} from './users.js'
import {clients} from './clients.js'
import {peluqueros} from './peluqueros.js'
import {servicios} from './servicios.js'
import User from '../User.js'
import Cliente from '../Cliente.js'
import Peluquero from '../Peluquero.js'
import Servicio from '../sevicio.js'

let newUsers = async(users)=> await User.insertMany(users)

let newRoles = async(rol1, rol2)=>{
    for (let client of rol1){
        let user = await User.findOne({email:client.user_id})
        client.user_id = user.id
        await Cliente.create(client)
    }
    for (let peluquero of rol2){
        let user = await User.findOne({email:peluquero.user_id})
        peluquero.user_id = user.id
        await Peluquero.create(peluquero)
    }
}
let newServices = async(servicios)=> await Servicio.insertMany(servicios)

let data=async()=>{
    await newUsers(users)
    await newRoles(clients, peluqueros)
    await newServices(servicios)
}
data()
