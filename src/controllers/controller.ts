import { Request, Response } from "express";
import {User,UserConfig} from "../models/model"


const addUser=async(req:Request,res:Response)=>{
    try{
    // 1. Define las configuraciones del usuario
    const userConfigData = {
        emailUpdates: true, // Ejemplo: Cambia aquí las configuraciones
        theme: "DARK", // Ejemplo: Cambia aquí las configuraciones
      };
  
      // 2. Crea una instancia de UserConfig utilizando las configuraciones
      const userConfig = await UserConfig.create(userConfigData);
  
      // 3. Crea una instancia de User y asigna la instancia de UserConfig
      const newUser = await User.create({
        nombre: "Ejemplo", // Ejemplo: Cambia aquí los datos del usuario
        email: "ejemplo@example.com", // Ejemplo: Cambia aquí los datos del usuario
        age: 25, // Ejemplo: Cambia aquí los datos del usuario
        password: "contrasena", // Ejemplo: Cambia aquí los datos del usuario
        role: "REGISTER_USER", // Ejemplo: Cambia aquí los datos del usuario
        user_config: userConfig._id, // Asigna el ID de la instancia de UserConfig
        user_configId: userConfig._id, // Asigna el ID de la instancia de UserConfig
      });
  
      // 4. Guarda el usuario y su configuración en la base de datos
      await newUser.save();
  
      // Devuelve una respuesta exitosa
      return res.status(201).json(newUser);

    }catch(err){
        return res.status(500).json(err)
    }
}