import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://myapp-backend.onrender.com'; // ⬅️ Add this line

export const registerUser = createAsyncThunk('user/register', async (data) => {
  const res = await axios.post(`${BASE_URL}/api/users/register`, data); // ⬅️ Update
  return res.data;
});

export const loginUser = createAsyncThunk('user/login', async (data) => {
  const res = await axios.post(`${BASE_URL}/api/users/login`, data); // ⬅️ Update
  return res.data;
});
