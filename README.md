##  FlowLeave 📜

**FlowLeave** is a minimal and efficient Leave Management System built with the MERN stack. It allows employees to apply for leave and admins to manage requests—simple, clean, and powerful.

---

## ✨ Features

- 👥 User Registration
- 📝 Leave Application
- 📄 Leave List with Status
- 🔒 Role-based Access (Admin/Employee)
- 🌐 Fully Responsive UI
- 🔄 Backend & Frontend connected via Render

---

## 🏗️ Project Structure

FlowLeave/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── server.js
│ └── .env (for local use)
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── features/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── vite.config.js
│ └── package.json
│
├── README.md
└── package.json (root optional)

yaml
Copy
Edit

---

## 🛠️ Tech Stack

- **Frontend**: React + Redux Toolkit + Vite + MUI
- **Backend**: Node.js + Express.js + MongoDB
- **Database**: MongoDB Atlas
- **Deployment**: Render

---

## 🚧 Local Setup

### 🔐 Prerequisites

- Node.js & npm
- MongoDB Atlas URI
- Git

### ⚙️ Backend Setup

```bash
cd backend
npm install
# Create .env and add the following:
# PORT=5000
# MONGO_URI=your_mongo_uri
npm start
🖥️ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
🚀 Deployment (Render)
🔗 Backend (Web Service)
Deploy /backend as a Web Service

Set up environment variables in Render:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_uri
🌐 Frontend (Static Site)
Hardcode BASE_URL = 'https://your-backend.onrender.com' in your thunks

Build the frontend:

bash
Copy
Edit
npm run build
Deploy /frontend/dist as a Static Site

🙌 Author
Made with ❤️ by Anurudha

📄 License
This project is open-source and available under the MIT License.
