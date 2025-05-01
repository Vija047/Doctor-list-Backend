const Doctor = require('../models/Doctor');

// POST /api/doctors/add-doctor
exports.addDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /api/doctors/list-doctor-with-filter
exports.listDoctors = async (req, res) => {
  const { page = 1, limit = 10, experience, fees, consultMode, language } = req.query;
  const filter = {};

  if (experience) {
    const exp = parseInt(experience);
    if (exp === 0) filter.experience = { $lte: 5 };
    else if (exp === 1) filter.experience = { $gt: 5, $lte: 10 };
    else if (exp === 2) filter.experience = { $gt: 10 };
  }

  if (fees) filter.fees = { $lte: parseInt(fees) };
  if (consultMode) filter.consultModes = consultMode;
  if (language) filter.languages = language;

  try {
    const doctors = await Doctor.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const total = await Doctor.countDocuments(filter);
    res.json({ total, page: parseInt(page), data: doctors });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
