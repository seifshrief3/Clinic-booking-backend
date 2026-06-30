import express from "express";
import cors from "cors";
import doctorsRoute from "./routes/DoctorsRoute.js";
import appointementsRoute from "./routes/AppointementsRoute.js";


const app = express();

app.use(cors({
  origin: [
    "https://clinic-booking-tan.vercel.app/",
    "http://localhost:5173"
  ],
  credentials: true
}));
app.use(express.json());

app.get("/doctors", doctorsRoute)
app.post("/add-doctor", doctorsRoute)
app.delete("/delete-doctor/:id", doctorsRoute)

app.get("/appointements", appointementsRoute)
app.get("/appointements/:id", appointementsRoute)
app.post("/set-appointement", appointementsRoute)
app.put("/edit-appointement/:id", appointementsRoute)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
})