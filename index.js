import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import authRoute from "./api/routes/auth.js"
import usersRoute from "./api/routes/users.js"
import hotelsRoute from "./api/routes/hotels.js"
import roomsRoute from "./api/routes/rooms.js"
const app = express()
dotenv.config()
//const mongoose = require('mongoose')

// mongoose.connect(
//     process.env.MONGO,
//     () => console.log('Connected to the DB')
//   )

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to MongoDB Database')
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected")
})

//Endpoints
app.get("/", (req, res) => {
    res.send("Hey")
})


//Middleware
app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'))

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute) //Users
app.use("/api/hotels", hotelsRoute) //Hotels
app.use("/api/rooms", roomsRoute) //Rooms

        //Error Handler
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage
    })
})

app.listen(8000, () => {
    connect()
    console.log("Connected to Back End!")
})
