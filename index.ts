import  { Request, Response } from "express"
const PORT=process.env.PORT || 3000
import {connectionDB} from "./connection"
import dotenv from "dotenv"
import createServer from "./server"
dotenv.config()

const app=createServer()

app.get("/",(req:Request,res:Response)=>{
    return res.send("Home page")
})

if(process.env.MONGO_URI){
     connectionDB(process.env.MONGO_URI)
}
app.listen(PORT,()=>console.log("SERVER RUNNING"))



