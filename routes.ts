import express from "express"

const router=express.Router()
import {addUser,getAllUsers,addPost} from "./controller"


router.route("/users").get(getAllUsers).post(addUser)
router.route("/add-post").post(addPost)


export default router;

