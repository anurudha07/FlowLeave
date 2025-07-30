# FlowLeave 📝

<sub>A minimal leave management system built with the MERN stack + Redux.</sub>

---

## 🔧 Tech Stack
- React + Vite + Redux Toolkit (Frontend)
- Node.js + Express + MongoDB (Backend)
- Render (Deployment)

---

## 📁 Project Structure

FlowLeave/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── .env
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── features/
│ │ │ ├── users/
│ │ │ │ └── userThunks.js
│ │ │ └── leaves/
│ │ │ └── leaveThunks.js
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ └── vite.config.js
├── README.md
└── package.json

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### Backend (Render Web Service)
1. Create `.env` file:
MONGO_URI=your_mongo_url
PORT=5000

bash
Copy
Edit
2. Install dependencies:
```bash
cd backend
npm install
npm start
Frontend (Render Static Site)
Update BASE_URL in userThunks.js & leaveThunks.js:

js
Copy
Edit
const BASE_URL = 'https://your-backend-url.onrender.com';
Build frontend:

bash
Copy
Edit
cd frontend
npm install
npm run build
Deploy dist/ folder as a static site on Render.

✨ Features
🧑‍💼 User Registration

📅 Leave Application

✅ Admin Leave Approval

🔒 Role-based UI (Admin & Employee)

🧪 Live Demo
Frontend: https://flowleave.onrender.com
Backend: https://flowleave-backend.onrender.com
