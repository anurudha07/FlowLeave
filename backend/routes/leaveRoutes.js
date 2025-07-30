import express from 'express';
import { applyLeave, getAllLeaves } from '../controllers/leaveController.js';
const router = express.Router();
router.route('/api/leave/apply').post(applyLeave);
router.route('/api/leave/all').get(getAllLeaves);
export default router;