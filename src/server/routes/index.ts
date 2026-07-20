//define endpoints  serve apenas para chamar rotas 
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import {CidadesControllers} from './../controllers/index.js'

CidadesControllers.create

const router = Router()

router.post('/', ( _ , res) =>{
    
    return res.send('funcionando')
    
})

router.post('/cidades', CidadesControllers.create)





export {router}