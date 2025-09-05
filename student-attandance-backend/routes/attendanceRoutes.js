const express = require('express');

const { addAttendance, getAttendance,getAllAttendance } = require('../controller/attendanceController');

const router = express.Router();

router.post('/student', addAttendance);
router.get('/student/:date', getAttendance);
router.get("/all", getAllAttendance);
module.exports = router;