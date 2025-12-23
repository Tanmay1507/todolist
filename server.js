import express from "express"
import router from "./routes/user.routes.js"
import connectDB from "./config/db.connect.js"
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(express.json())
app.use(router)

connectDB()
app.listen(3001,()=>{
    console.log("your server is runing localhost 3001")
})