import express from 'express';
import { registerUser, getUsers } from '../controllers/userController.js';
const router = express.Router();

router.route('/users').post(registerUser).get(getUsers)
export default router;