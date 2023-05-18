import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js"

const router = express.Router()

//Create
router.post("/", createHotel)

//Update
router.put("/:id", updateHotel)

//Delete
router.delete("/:id",deleteHotel)

//Get Specific Hotel
router.get("/:id", getHotel)

//Get All Hotels
router.get("/", getHotels)



export default router
