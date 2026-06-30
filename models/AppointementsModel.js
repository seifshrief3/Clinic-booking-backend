import pool from "../db.js";

const AppointementsModel = {
  getAllAppointements: async () => {
    const result = await pool.query(`
    SELECT
      appointments.id,
      appointments.patient_name,
      appointments.patient_phone,
      appointments.appointment_date,
      appointments.status,

      doctors.id AS doctor_id,
      doctors.name AS doctor_name,
      doctors.specialization,
      doctors.price,
      doctors.phone

    FROM appointments
    JOIN doctors
      ON appointments.doctor_id = doctors.id
  `);

    return result.rows;
  },

  setAppointement: async (appointement) => {
    const result = await pool.query(
      `INSERT INTO appointments
(
  patient_name,
  patient_phone,
  doctor_id,
  appointment_date,
  user_id,
  status
)
VALUES ($1, $2, $3, $4, $5, 'قيد الانتظار') RETURNING *`,
      [
        appointement.patient_name,
        appointement.patient_phone,
        appointement.doctor_id,
        appointement.appointment_date,
        appointement.user_id,
      ]
    );

    return result.rows;
  },

  getUserAppointements: async (id) => {
    const result = await pool.query(
      `SELECT
    appointments.id,
      appointments.patient_name,
      appointments.patient_phone,
      appointments.appointment_date,
      appointments.status,

      doctors.id AS doctor_id,
      doctors.name AS doctor_name,
      doctors.specialization,
      doctors.price,
      doctors.phone
FROM appointments
JOIN doctors
ON appointments.doctor_id = doctors.id
WHERE appointments.user_id = $1`,
      [id]
    );
    return result.rows;
  },


  updateStatus: async (id, status) => {
    const result = await pool.query(
      `UPDATE appointments
     SET status = $1
     WHERE id = $2
     RETURNING *`,
      [status, id]
    );

    return result.rows;
  }
}


export default AppointementsModel