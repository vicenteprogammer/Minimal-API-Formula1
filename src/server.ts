import Fastify from "fastify";
import { drivers } from "./database/drivers";
import { teams } from "./database/teams";
const server = Fastify({
    logger: true
})



server.listen({port:8000}, (err,address)=>{
    console.log('Server is Activated')
    if(err){
        server.log.error(err)
        process.exit(1)
    }
})

server.get('/drivers', (req,res)=>{
    return {drivers}
})

interface Driverparams{
    id:string
}

server.get<{Params:Driverparams}>('/drivers/:id', async (req,res)=>{
    const id = Number(req.params.id)
    const driver = drivers.find((d)=> d.id === id)

    if(!driver){
        res.type('application/json');
        return {message: "Driver is not found"}
    }else{
        res.type('application/json');
        return{driver}
    }
})

server.get('/teams',(req,res)=>{
    res.type('application/json');
    return {teams}
})



export default server
