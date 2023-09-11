import express from "express"
import {getAll,getOne,deleteUser,addUser} from "../controller/controller"
const router=express.Router()

router.route("/users").get(getAll).post(addUser)
router.route("/users/:id").get(getOne).delete(deleteUser)


export default router;