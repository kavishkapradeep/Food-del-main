import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import 'dotenv/config.js'
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";


//app config

const app= express()
const port=4000;

//middleware

app.use(express.json())
app.use(cors())

//db connected

connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)


app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})