import { addTask,deleteTasKById,showTask, updateTaskById } from "../model/user.model.js"

export const homePage=(req,res)=>{
    res.send('welcome to my to-do list')
}

export const addNewTask=async(req,res)=>{
    
    try{
    let dataGetFromUser= await addTask(req.body.task)
    //res.status(200).json({massage:"your task is added",dataGetFromUser})
      res.redirect("/")
    }catch(error)
    {
       res.status(401).json(error) 
    }
}

export const showAllTask=async (req,res)=>{
    let allTask= await showTask()
    
    res.render("./index.ejs",{ allTask: allTask })
}
export const updateTask=async(req,res)=>{
    const id = req.body.selectedId
    let update_task =await updateTaskById(id,req.body.updatedData)
    if(!update_task){
        res.status(401).json({massage:"user task not found"})

    }else{
    res.redirect("/")
    }


}
export const deleteTask = async(req,res)=>{
    const id = req.body.selectedId
    let deletetask_task =await deleteTasKById(id)
    if(!deletetask_task){
        res.status(401).json({massage:"user task not found"})

    }else{
    res.redirect("/")
    }
}
