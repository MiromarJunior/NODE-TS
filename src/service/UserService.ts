
const db = [{
    name: "João",
    email : "joao@gmail.com"
}]




export class UserService{

    createUser = (name:string, email:string)=>{
        const usu = {name,email}
        db.push(usu);
        console.log("DB Atualizado",db);
    }

    getAllUsers = () =>{
        return db;
    }



}