##  FlowLeave 📜

**FlowLeave** is a minimal and efficient Leave Management System built with the MERN stack. 

---

## ✨ Features

- 👥 User Registration
- 📝 Leave Application
- 💼 Employee List with different sections
- 📄 Leave List with Status
- 🌐 Fully Responsive UI


---

## 🏗️ Project Structure

FlowLeave/
│
├── backend/
| ├── config/ 
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── server.js
│ ├── package.json
│ └── .env (for local use)
│
├── frontend/
│ ├── public/
│ ├── src/
| | ├── app/
| | ├── assets/
│ │ ├── components/
│ │ ├── features/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── vite.config.js
│ └── package.json
│
├── README.md



---

## 🛠️ Tech Stack

- **Frontend**: React + Redux Toolkit + Vite + MUI
- **Backend**: Node.js + Express.js + MongoDB
- **Database**: MongoDB Atlas
- **Deployment**: Render

---

 🚧 Local Setup ---------> Developement 

### 🔐 Prerequisites

- Node.js & npm
- MongoDB Atlas URI
- Git

### ⚙️ Project Setup

```
🔗 Backend Setup

cd backend
npm i 
# Create .env and add the following:
# PORT=5000
# MONGO_URI=your_mongo_uri       - from MongoDB Atlas
npm run dev

🖥️ Frontend Setup

cd frontend
npm i
npm run dev

🚀 Deployment (Render)      ---render.com
🔗 Backend (Web Service)
🖥️ Frontend (static)
Deploy /backend as a Web Service

Set up environment variables in Render:

PORT=5000
MONGO_URI=your_mongo_uri

🌐 Frontend (Static Site)
Hardcode BASE_URL = 'yourDeployedBackend.onrender.com' in your thunks



Production ----------->

Build the frontend on render:

build command: npm run build
publish directory: dist


Build the backend on render:

build command: npm i
run command: npm start


🙌 Author
Made with ❤️ by Anurudha
This project is open-source 
