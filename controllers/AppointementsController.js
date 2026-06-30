import AppointementsModel from "../models/AppointementsModel.js"

const AppointementsController = {
  getAllAppointements: async (req, res) => {
    const appointements = await AppointementsModel.getAllAppointements();
    res.json(appointements);
  },

  getUserAppointements: async (req, res) => {
    const id = req.params.id;
    const appointements = await AppointementsModel.getUserAppointements(id);
    res.json(appointements);
  },

  setAppointement: async (req, res) => {
    const appointement = req.body;
    const newAppointement = await AppointementsModel.setAppointement(appointement);
    res.json(newAppointement);
  },

  updateStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const appointment = await AppointementsModel.updateStatus(id, status);

    res.json(appointment);
  }
}


export default AppointementsController