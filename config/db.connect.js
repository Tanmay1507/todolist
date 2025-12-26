import mongoose, { connect } from "mongoose"
import dotenv from "dotenv"
dotenv.config()
if (!process.env.url){
    console.log ("you don't have any conection url of mongodb")
}
const connectDB =async function connectDB() {
     await mongoose.connect(process.env.url)
    console.log("you have connected to database :)")
}
export default connectDB

