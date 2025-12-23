import mongoose from "mongoose"
const data =new mongoose.Schema({
    task:{type : String,
        required:[true,"you need to fill task"],
        minlength:[4,"task size must be more than 4 letters."],
        maxlength:[50,"task must be less than 50 letters."]
    }
})

const taskdata =mongoose.model("task",data)
export default taskdata