import express from 'express'
import {router} from  './routes/index.js'
import dotenv from "dotenv"



const server = express();

server.use(router)
server.use(express.json())


dotenv.config();

export { server };

