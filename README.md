🌿 FlowLeave - Leave Management App
A simple full-stack leave management system built using MERN + Redux. Employees can register and apply for leaves, and admins can view all leave requests.

📁 Project Structure
arduino
Copy
Edit
FlowLeave/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── features/
│   │   │   ├── users/
│   │   │   │   └── userThunks.js
│   │   │   └── leaves/
│   │   │       └── leaveThunks.js
│   │   ├── pages/
│   │   └── App.jsx
│   └── vite.config.js
└── README.md
🚀 Live URLs
Frontend: https://flowleave-frontend.onrender.com

Backend API: https://flowleave-backend.onrender.com

📦 Tech Stack
Frontend: React + Vite + Redux Toolkit + MUI

Backend: Node.js + Express + MongoDB + Mongoose

Deployment: Render

🛠 Setup Instructions
✅ 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/anurudha07/FlowLeave.git
cd FlowLeave
✅ 2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create .env file in /backend:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start backend:

bash
Copy
Edit
npm start
✅ 3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
To build for production:

bash
Copy
Edit
npm run build
📌 API Endpoints (Backend)
Method	Endpoint	Description
POST	/users	Register new user
GET	/users	Get paginated users
POST	/api/leave/apply	Apply for leave
GET	/api/leave/all	Get all leave requests
