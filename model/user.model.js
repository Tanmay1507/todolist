import taskdata from "../model/user.schema.js"

export const addTask =async(data)=>{
    const userTaskAdd = await taskdata.create({task:data})
    return userTaskAdd
}

export const showTask =async ()=>{
    const userTaskShow =await taskdata.find({})
    userTaskShow.filter(task =>task.task===task)
    return userTaskShow
}
export const updateTaskById= async (id,updatedData)=>{
    const usertaskUpdate=await taskdata.findByIdAndUpdate(id ,( {task:updatedData }), { new: true })
    return usertaskUpdate
}
export const deleteTasKById= async (id )=>{
    const usertaskDelete=await taskdata.findByIdAndDelete(id)
    return usertaskDelete
}