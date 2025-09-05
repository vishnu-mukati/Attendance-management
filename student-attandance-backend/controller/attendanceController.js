const Attendance = require('../models/attendance');
const addAttendance = async (req, res) => {
  try {
    const data = req.body; 

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: "Invalid data format" });
    }

    // Multiple records insert
    const attendance = await Attendance.bulkCreate(data);

    res.status(201).json({
      message: "Attendance saved successfully",
      attendance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getAttendance = async (req, res) => {
    try {
        const { date } = req.params;
        const attendance = await Attendance.findAll({ where: { date } });
        res.status(200).json(attendance);
    } catch (error) {
        console.error("Error fetching attendance:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    addAttendance,
    getAttendance
};