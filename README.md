# 🌿 FlowLeave

A minimal full-stack leave management system built with MERN and Redux Toolkit.

---

## 🌐 Live

- **Frontend**: https://flowleave-frontend.onrender.com  
- **Backend**: https://flowleave-backend.onrender.com

---

## 🗂️ Folder Structure

FlowLeave/
├── backend/ # Express backend
│ ├── controllers/ # Route handlers
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── middleware/ # Custom middlewares
│ ├── config/ # DB connection etc.
│ ├── server.js # Entry point
│ └── .env # Env vars (MONGO_URI, PORT)

├── frontend/ # React + Redux frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Routes like Register, Dashboard
│ │ ├── features/ # Redux slices & thunks
│ │ │ ├── users/
│ │ │ └── leaves/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── vite.config.js

└── README.md

yaml
Copy
Edit

---

## 🚀 Quick Start

### Backend

```bash
cd backend
npm install
# .env file with:
# MONGO_URI=your_mongo_url
# PORT=5000
npm run dev
Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
✅ To deploy:

npm run build (frontend)

Use dist/ folder on Render Static Site

Hardcode backend URL in userThunks.js & leaveThunks.js if needed

🛠️ Stack
Frontend: React, Redux Toolkit, Vite, Axios, Material UI

Backend: Node.js, Express.js, MongoDB

Deployment: Render (Static + Web Service)

© 2025 Anurudha Sarkar
