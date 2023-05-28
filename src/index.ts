import express,{Request,Response}from "express";
import { router } from "./routes";

const server = express();

server.use(express.json())

server.get("/",(req : Request,res : Response)=>{
    res.status(200).send({message : " DIO Bank"})
})

server.use(router);


server.listen(5000, ()=>{
    console.log("servidor Online na Porta 5000");
})
