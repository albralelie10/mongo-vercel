import express, { Request, Response } from "express"
const PORT=process.env.PORT || 3000
import dotenv from "dotenv"
import {connectionDB} from "./src/db/db"
import createServer from "./src/utils/server"

dotenv.config()

const app=createServer()

app.get("/",(req:Request,res:Response)=>{
    return res.send("Home page")
})

app.listen(PORT,async ()=>{
  console.log("SERVER RUNNING")
  if(process.env.MONGO_URI){
    await connectionDB(process.env.MONGO_URI)
  }
})

export default app;


