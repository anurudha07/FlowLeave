##  FlowLeave 📜

**FlowLeave** is a minimal and efficient Leave Management System flow built with the MERN stack. 

---

 ✨ Features

- 👥 User Registration
- 📝 Leave Application
- 💼 Employee List with different sections
- 📄 Leave List with Status
- 🌐 Fully Responsive UI


---

 🏗️ Project Structure

```
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

```

---

 🛠️ Tech Stack

- **Frontend**: React + Redux Toolkit + Vite + MUI
- **Backend**: Node.js + Express.js + MongoDB
- **Database**: MongoDB Atlas
- **Deployment**: Render

---

 🚧 Local Setup ---------> Developement 

 🔐 Prerequisites

- Node.js & npm
- MongoDB Atlas URI
- Git

 ⚙️ Project Setup

```

🛠️ Installation

Download the zip code from https://github.com/anurudha07/FlowLeave
Open uin VS code or any other relevant code editor

Proceed with following steps further...

🔗 Backend Setup

# Create .env and add the following:
# PORT=5000
# MONGO_URI=your_mongo_uri       - from MongoDB Atlas
cd backend
npm i
npm run dev



🖥️ Frontend Setup

cd frontend
npm i
npm run dev



📝 Note: Also change the files ----->

backend/server.js:

app.use(cors({
   origin: true,    < ----------  here!
   credentials: true
}));



userThunks.js && leaveThunks.js:

const BASE_URL = 'http://localhost:<YOUR_PORT>';


For API Testing using Postman or any other relevant -

1. POST    http://localhost:5000/users  – To register a user
2. GET     http://localhost:5000/users – To retrieve a list of registered users
3. POST    http://localhost:5000/api/leave/apply  – To apply for leave
4. GET     http://localhost:5000/api/leave/all  – Admin fetches all leave requests


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
