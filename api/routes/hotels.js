import express from "express"
import Hotel from "../models/Hotel.js"

const router = express.Router()

//Create
router.post("/", async (req, res) => {

    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch(err) {
        res.status(500).json(err)
    }
})

//Update
router.put("/:id", async (req, res) => {

    try {                                                   //id           //Obj to modify    //Modified Obj
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch(err) {
        res.status(500).json(err)
    }
})

//Delete
router.delete("/:id", async (req, res) => {

    try {                                                   //id
        const hotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch(err) {
        res.status(500).json(err)
    }
})

//Get Specific Hotel
router.get("/:id", async (req, res) => {

    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch(err) {
        res.status(500).json(err)
    }
})

//Get All Hotels
router.get("/", async (req, res) => {

    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch(err) {
        res.status(500).json(err)
    }
})



export default router
