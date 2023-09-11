import express from "express"
import router from "../router/router"



function createServer(){

    const app=express()

    app.use(express.json())
    
    app.use("/",router)
    return app
    
}
export default createServer;