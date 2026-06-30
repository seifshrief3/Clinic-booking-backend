import express from "express"
import DoctorsController from "../controllers/DoctorsController.js"

const router = express.Router()

router.get("/doctors", DoctorsController.getDoctors)
router.post("/add-doctor", DoctorsController.addNewDoctor)
router.delete("/delete-doctor/:id", DoctorsController.deleteDoctor)

export default router