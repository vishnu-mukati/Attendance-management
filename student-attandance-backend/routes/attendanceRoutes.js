const express = require('express');

const { addAttendance, getAttendance } = require('../controller/attendanceController');

const router = express.Router();

router.post('/student', addAttendance);
router.get('/student/:date', getAttendance);
module.exports = router;