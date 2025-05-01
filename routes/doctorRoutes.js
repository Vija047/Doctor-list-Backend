const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/add-doctor', doctorController.addDoctor);
router.get('/list-doctor-with-filter', doctorController.listDoctors);

module.exports = router;
