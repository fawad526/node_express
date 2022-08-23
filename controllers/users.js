let users=[];

import { v4 as uuidv4 } from 'uuid';

export const getUsers=(req, res)=>{
    
    res.send(users);
}

export const createUser = (req,res)=>{
    const user = req.body;
    users.push({...user,id:uuidv4()});
    res.send(`User with the name ${user.FirstName} added to the database`);
}
export const getUser = (req,res)=>{
    const { id } = req.params;
    const userfound=users.find((user)=>user.id==id);
    res.send(userfound);
}
export const deleteUser = (req,res)=>{
    const {id} =req.params;
    users=users.filter((user)=>user.id !== id);
    res.send(`User with the id ${id} deleted from the database`);
    }
export const updateUser = (req,res)=>{
    
        const {id} = req.params;
        const {FirstName,LastName,age} = req.body;
        const user = users.find((user) => user.id == id);
        if(FirstName){
            user.FirstName = FirstName;
        }
        if(LastName){
            user.LastName = LastName;
        }
        if(age){
            user.age = age;
        }
        res.send(`User with the id ${id} has been updated`);
    }