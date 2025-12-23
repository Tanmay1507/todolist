import mongoose, { connect } from "mongoose"
const url="/*enter your mongoDB URL*/"

const connectDB =async function connectDB() {
     await mongoose.connect(url)
    console.log("you have connected to database :)")
}
export default connectDB

