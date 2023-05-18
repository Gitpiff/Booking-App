import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js"
import { verifyToken } from "../utilities/verifyToken.js"

const router = express.Router()

//Check Authentication
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Welcome! You are logged in")
})

//Update User
router.put("/:id", updateUser)

//Delete User
router.delete("/:id",deleteUser)

//Get Specific User
router.get("/:id", getUser)

//Get All Users
router.get("/", getUsers)

export default router
