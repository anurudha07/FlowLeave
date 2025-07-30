import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://myapp-backend.onrender.com'; // ⬅️ Add this line

export const fetchLeaves = createAsyncThunk('leave/fetch', async () => {
  const res = await axios.get(`${BASE_URL}/api/leave/all`); // ⬅️ Update here
  return Array.isArray(res.data) ? res.data : res.data.leaves || [];
});

export const applyLeave = createAsyncThunk('leave/apply', async (data) => {
  const res = await axios.post(`${BASE_URL}/api/leave/apply`, data); // ⬅️ Update here
  return res.data;
});
