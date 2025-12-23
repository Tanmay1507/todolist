import express from "express"
import { addNewTask, deleteTask, homePage, showAllTask, updateTask } from "../controller/user.controller.js"
const routes=express.Router()

//routes.get("/",homePage)
routes.post("/addtask",addNewTask)
routes.get("/",showAllTask)
routes.post("/updateTask",updateTask)
routes.post("/deleteTask",deleteTask)
export default routes