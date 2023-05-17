import express from "express"
import dotenv from "dotenv"
const app = express()
dotenv.config()
import mongoose from "mongoose"
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

app.listen(8000, () => {
    connect()
    console.log("Connected to Back End!")
})
