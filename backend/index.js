import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/connectDB.js'
import goalRoute from './route/goalRoute.js'
import userRoute from './route/userRoute.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/api/goals", goalRoute)
app.use("/api/users", userRoute)

const startServer = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log("Server started")
    })
}
 
startServer()