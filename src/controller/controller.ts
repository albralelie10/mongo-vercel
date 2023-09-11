import { Request,Response } from "express"
import  User from "../model/user"

export const getAll =async(req:Request,res:Response)=>{
    try{
        const users=await User.find() 
        return res.json(users)
      }catch(err){  
        return res.status(500).json(err)
      }
}

export const getOne=async(req:Request,res:Response)=>{
  try{

    const {id}=req.params;
      const user=await User.findById({_id:id})
    return res.status(200).json(user)
  }catch(err){
    return res.status(500).json(err)
  }

}

export const addUser=async(req:Request,res:Response)=>{
    try{
        const newUser= await User.create(req.body)
  
        return res.status(201).json(newUser);
  
      }catch(err){
          return res.status(500).json(err)
      }
}

export const deleteUser=async(req:Request,res:Response)=>{
    try{
      const {id}=req.params;
        const deleteUser=await User.findOneAndDelete({_id:id})
      return res.status(200).json(deleteUser)
    }catch(err){
      return res.status(500).json(err)
    }

}
