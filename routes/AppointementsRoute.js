import express from "express"
import AppointementsController from "../controllers/AppointementsController.js"

const router = express.Router()

router.get("/appointements", AppointementsController.getAllAppointements)
router.get("/appointements/:id", AppointementsController.getUserAppointements)
router.post("/set-appointement", AppointementsController.setAppointement)
router.put("/edit-appointement/:id", AppointementsController.updateStatus);

export default router