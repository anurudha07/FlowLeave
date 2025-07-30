import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import leaveRoutes from './routes/leaveRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://flowleave.onrender.com',
  credentials: true
}));

app.use('/', userRoutes);
app.use('/', leaveRoutes);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));
