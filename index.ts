import express, { Request, Response } from "express"
const PORT=process.env.PORT || 3000
import dotenv from "dotenv"
import {connectionDB} from "./src/db/db"
import router from "./src/router/router"
dotenv.config()

const app=express()

app.use(express.json())
    
app.use("/",router)


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


