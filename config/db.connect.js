import mongoose, { connect } from "mongoose"
const url="mongodb+srv://tanmaywagh2101_db_user:todoList123@todolist.euproih.mongodb.net/?appName=todoList"

const connectDB =async function connectDB() {
     await mongoose.connect(process.env.url)
    console.log("you have connected to database :)")
}
export default connectDB

