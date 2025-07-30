import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://flowleave-backend.onrender.com';

export const fetchLeaves = createAsyncThunk('leave/fetch', async () => {
  const res = await axios.get(`${BASE_URL}/api/leave/all`); 
  return Array.isArray(res.data) ? res.data : res.data.leaves || [];
});

export const applyLeave = createAsyncThunk('leave/apply', async (data) => {
  const res = await axios.post(`${BASE_URL}/api/leave/apply`, data); 
  return res.data;
});
