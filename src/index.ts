import express, { Request, Response } from "express"
const PORT=process.env.PORT || 3000
import dotenv from "dotenv"
import {connectionDB} from "./db/db"
import router from "./router/router"
dotenv.config()

const app=express()

app.use(express.json())
    
app.use("/",router)

app.get("/",(req:Request,res:Response)=>{
    return res.send("Home page")
})

async function start (){
  try{
    if(process.env.MONGO_URI){
      await connectionDB(process.env.MONGO_URI)
      app.listen(PORT, ()=>console.log("SERVER RUNNING"))
    }
  }catch(err){
  }
}

start()


export default app;


