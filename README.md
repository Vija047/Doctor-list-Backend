#  Online Doctor Consultation Backend (Node.js + Express)

This backend serves as the API layer for the Online Doctor Consultation system. It enables doctor listing, filtering, and appointment booking functionalities.

##  Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for RESTful APIs
- **MongoDB Atlas** – Cloud NoSQL database
- **Mongoose** – MongoDB object modeling
- **Dotenv** – Environment variable management
- **Cors** – Cross-origin support

## Folder Structure

```bash
/backend
│
├── config/
│   └── db.js              # MongoDB connection setup
│
├── controllers/
│   └── doctorController.js
│
├── models/
│   └── Doctor.js
│
├── routes/
│   └── doctorRoutes.js
│
├── .env
├── app.js
├── package.json
└── README.md
```

##  API Endpoints

### `GET /api/doctors`
Get all doctors or filter by query params:
- `experience` (number)
- `language` (string)
- `mode` (`online`, `visit`)
- `feeMin`, `feeMax` (number)

### `POST /api/doctors`
Create a new doctor profile
```json
{
  "name": "Dr. Summaiya Banu",
  "experience": 8,
  "specialty": "General Practitioner",
  "location": "Hyderabad",
  "rating": 4.2,
  "fee": 499,
  "availableInMinutes": 2,
  "languages": ["English", "Hindi"],
  "mode": ["online"]
}
```

##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/doctor-consult-backend.git
cd doctor-consult-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file with:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

### 4. Run the server
```bash
npm run dev
```

Server will start at [http://localhost:5000](http://localhost:5000)

## Sample Doctor Model
```js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  experience: Number,
  specialty: String,
  location: String,
  rating: Number,
  fee: Number,
  availableInMinutes: Number,
  languages: [String],
  mode: [String] // ['online', 'visit']
});

module.exports = mongoose.model('Doctor', doctorSchema);
```

## Optional Enhancements
- JWT authentication for admin/doctor access
- Appointment booking & user system
- Pagination & advanced filtering

---

Built with Node.js + MongoDB to support modern healthtech apps 

