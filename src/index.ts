import {server} from './server/server.js' //express

server.listen(process.env.PORT, ()=>{
    console.log(`servidor rodando na porta ${process.env.PORT || 3000}`)
})
