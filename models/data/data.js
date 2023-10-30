import 'dotenv/config.js'
import '../../config/database.js'
import {users} from './users.js'
import {clients} from './clients.js'
import {peluqueros} from './peluqueros.js'
import {servicios} from './Servicio.js'
import {servicesTypes} from './servicesTypes.js'
import ServicesTypes from '../ServicesTypes.js'
import User from '../User.js'
import Cliente from '../Cliente.js'
import Peluquero from '../Peluquero.js'
import Servicio from '../Servicio.js'

let newUsers = async(users)=> await User.insertMany(users)
let newServicesTypes = async(servicesTypes) => await ServicesTypes.insertMany(servicesTypes)

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
let newServices = async(typeServices)=>{
    for(let service of typeServices){
        let typeServ = await ServicesTypes.findOne({name:service.serviceTypeId})
        service.serviceTypeId=typeServ._id
        await Servicio.create(service)
    }

}

let data=async()=>{
    await newUsers(users)
    await newServicesTypes(servicesTypes)
    await newRoles(clients, peluqueros)
    await newServices(servicios)
}
data()
