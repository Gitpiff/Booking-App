import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./api/routes/auth.js"
// import usersRoute from "./api/routes/users.js"
// import hotelsRoute from "./api/routes/hotels.js"
// import roomsRoute from "./api/routes/rooms.js"
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
app.use("/api/auth", authRoute)
app.use("/api/users", authRoute) //Users
app.use("/api/hotels", authRoute) //Hotels
app.use("/api/rooms", authRoute) //Rooms

app.listen(8000, () => {
    connect()
    console.log("Connected to Back End!")
})
