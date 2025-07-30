import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, department } = req.body;
    const hash = await bcrypt.hash(password,10);
    const user = await User.create({ name, email, password: hash, department });
    res.status(201).json({
        success:true,
        message:"User registered successfully",
        user});
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const { page=1, limit=10 } = req.query;
    const users = await User.find()
      .skip((page-1)*limit)
      .limit(parseInt(limit));
    res.status(200).json({
        success:true,
        message:"Getting... just a second",
        users
    });
  } catch (err) { next(err); }
};