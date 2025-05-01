const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize the app
const app = express();

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};


const doctorRoutes = require('./routes/doctorRoutes');


app.use(cors());
app.use(express.json());

// Route handling
app.use('/api/doctors', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: "http://localhost:8080", // frontend Vite default
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}))
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();
