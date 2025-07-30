import LeaveRequest from '../models/LeaveRequest.js';

export const applyLeave = async (req, res, next) => {
  try {
    const { employee, from, to, reason } = req.body;
    const lr = await LeaveRequest.create({ employee, from, to, reason });
    res.status(201).json({
        success:true,
        message:"Leave created successfully",
        lr
    });
  } catch (err) { next(err); }
};
export const getAllLeaves = async (req, res, next) => {
  try {
    const leaves = await LeaveRequest.find().populate('employee','name');
    res.status(200).json({
        success:true,
        message:"Getting all leaves",
        leaves
    });
  } catch (err) { next(err); }
};