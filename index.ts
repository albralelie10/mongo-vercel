import express, { Request, Response } from "express"
const PORT=process.env.PORT || 3000
import dotenv from "dotenv"
dotenv.config()
const app=express()
import mongoose from "mongoose"
import cors from "cors"


app.use(cors({
    origin:"*",
    methods:["GET","DELETE","PUT","POST","OPTIONS"]
}))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const userSchema= new mongoose.Schema({
    email:{
        type:String
    },
    pass:{
        type:String
    }
})

const User=mongoose.model("user",userSchema)

export const getAllUsers=async(req:Request,res:Response)=>{
    try{
      const users=await User.find() 
      console.log(users)
      return res.json(users)
    }catch(err){  
      return res.status(500).json(err)
    }
  }
 

app.get("/",(req:Request,res:Response)=>{
    return res.send("Home page")
})

app.get("/users",async(req:Request,res:Response)=>{
    try{
        const users=await User.find() 
        return res.json(users)
      }catch(err){  
        return res.status(500).json(err)
      }
})
app.get("/users/:id",async(req:Request,res:Response)=>{
  try{

    const {id}=req.params;
    console.log(id)

      const user=await User.findById({_id:id})
    return res.status(200).json(user)
  }catch(err){
    return res.status(500).json(err)
  }

})

app.post("/users",async(req:Request,res:Response)=>{
    try{
        const newUser= await User.create(req.body)
  
        return res.status(201).json(newUser);
  
      }catch(err){
          return res.status(500).json(err)
      }
})

app.delete("/users/:id",async(req:Request,res:Response)=>{
    try{
      const {id}=req.params;
      console.log(id)
        const deleteUser=await User.findOneAndDelete({_id:id})
      return res.status(200).json(deleteUser)
    }catch(err){
      return res.status(500).json(err)
    }

})

const connectionDB=async(uri:string)=>{
    return mongoose.connect(uri)
            .then(()=>console.log("CONNECT TO DB...."))
                .catch(err=>console.log(err))
}

if(process.env.MONGO_URI)connectionDB(process.env.MONGO_URI)

app.listen(PORT,()=>console.log("SERVER RUNNING"))

export default app;


