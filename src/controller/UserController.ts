import {  UserService } from "../service/UserService";
import { Request, Response } from "express";

export interface UserCon{
    name:string,
    email:string
}


export class UserController{

    createUser = (req : Request,res : Response)=>{
        const service = new UserService();
        const user = req.body;
        console.log(user);
        if(!user.name || !user.email){return res.status(400).send("Campos obrigatórios")}


        service.createUser(user.name,user.email);

        return res.status(201).send({message : "Usuário criado"})

    }

    getAllUsers = (req : Request,res : Response)=>{
        const service = new UserService();
        const users = service.getAllUsers();
        res.status(200).json(users);
    }
}