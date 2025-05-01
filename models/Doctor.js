const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,        // in years
  qualification: String,
  fees: Number,              // in INR
  languages: [String],
  consultModes: [String],    // ["Online", "Hospital Visit"]
  location: {
    city: String,
    state: String
  },
  rating: Number,
  isAvailable: Boolean,
  profileImage: String
});

module.exports = mongoose.model('Doctor', doctorSchema);
