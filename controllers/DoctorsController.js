import DoctorsModel from "../models/DoctorsModel.js";

const DoctorsController = {
  getDoctors: async (req, res) => {
    const doctors = await DoctorsModel.getAllDoctors();
    res.json(doctors);
  },

  addNewDoctor: async (req, res) => {
    const doctor = req.body;
    const newDoctor = await DoctorsModel.addNewDoctor(doctor);
    res.json(newDoctor);
  },

  deleteDoctor: async (req, res) => {
    const id = req.params.id;
    const deletedDoctor = await DoctorsModel.deleteDoctor(id);
    res.json(deletedDoctor);
  },
};

export default DoctorsController;