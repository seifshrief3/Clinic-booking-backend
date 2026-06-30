import express from "express";
import cors from "cors";
import doctorsRoute from "./routes/DoctorsRoute.js";
import appointementsRoute from "./routes/AppointementsRoute.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/doctors", doctorsRoute)
app.post("/add-doctor", doctorsRoute)
app.delete("/delete-doctor/:id", doctorsRoute)

app.get("/appointements", appointementsRoute)
app.get("/appointements/:id", appointementsRoute)
app.post("/set-appointement", appointementsRoute)
app.put("/edit-appointement/:id", appointementsRoute)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})