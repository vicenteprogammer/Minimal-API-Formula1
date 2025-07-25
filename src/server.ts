import Fastify from "fastify";

const fastify = Fastify({
    logger: true
})

fastify.listen({port:8000}, (err,address)=>{
    console.log('Server is Activated')
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
})
