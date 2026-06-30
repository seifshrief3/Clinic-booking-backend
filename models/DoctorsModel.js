import pool from "../db.js";

const DoctorsModel = {
  getAllDoctors: async () => {
    const result = await pool.query("SELECT * FROM doctors");
    return result.rows;
  },

  addNewDoctor: async (doctor) => {
    const result = await pool.query(
      "INSERT INTO doctors (name, specialization, phone, price) VALUES ($1, $2, $3, $4) RETURNING *",
      [doctor.name, doctor.specialization, doctor.phone, doctor.price]
    );
    return result.rows[0];
  },

  deleteDoctor: async (id) => {
    const result = await pool.query("DELETE FROM doctors WHERE id = $1", [id]);
    return result.rows
  }
}

export default DoctorsModel