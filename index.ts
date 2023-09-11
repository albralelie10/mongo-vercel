import express, { Request, Response } from "express"
const PORT=3000||process.env.PORT
const app =express()
import {connectionDB} from "./src/db/connection"
import dotenv from "dotenv"
dotenv.config()

app.get("/",(req:Request,res:Response)=>{
    return res.send("Home page")
})

const start=async()=>{
    try{
        if(process.env.MONGO_URI){
            await connectionDB(process.env.MONGO_URI)
        }        
        app.listen(PORT,()=>console.log("SERVER RUNNING"))
    }catch(err){
        console.log(err)
    }
}

start()

