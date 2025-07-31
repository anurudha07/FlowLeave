##  FlowLeave 📜

**FlowLeave** is a minimal and efficient Leave Management System built with the MERN stack. 

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

https://anurudhasarkar.postman.co/workspace/My-Workspace~af99c54d-fd96-49e7-8bbb-220038a8c381/collection/45057045-5f24c1e1-dae6-49a7-a582-d78275356ac1?action=share&source=copy-link&creator=45057045


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
