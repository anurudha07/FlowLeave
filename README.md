# 🌿 FlowLeave

FlowLeave is a minimal full-stack leave management system built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Redux Toolkit**.

Users can register, apply for leave, and view their leave history. Admins can view and manage all leave requests.

---

## 🚀 Live Demo

- **Frontend** (Render Static Site): [https://flowleave-frontend.onrender.com](https://flowleave-frontend.onrender.com)
- **Backend** (Render Web Service): [https://flowleave-backend.onrender.com](https://flowleave-backend.onrender.com)

---

## 📁 Project Structure

FlowLeave/
├── backend/ # Express.js API
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ ├── server.js
│ └── .env # For MongoDB URI, PORT
│
├── frontend/ # React + Redux App
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── features/
│ │ │ ├── users/
│ │ │ └── leaves/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
│
└── README.md

yaml
Copy
Edit

---

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, Axios, Material UI
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: [Optional: Add JWT if used]
- **Hosting**: Render (static + web service)

---

## 📦 Setup Instructions

### 📌 Backend

```bash
cd backend
npm install
# Create .env and add:
# MONGO_URI=your_mongo_connection_string
# PORT=5000
npm run dev
📌 Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
To hardcode backend URL, update BASE_URL in:
src/features/users/userThunks.js & src/features/leaves/leaveThunks.js

📤 Deployment (Render)
Backend: Deploy as Web Service

Frontend: Deploy dist/ folder as Static Site

Build command: npm run build

Publish directory: dist

👤 Author
Anurudha Sarkar – @anurudha07
