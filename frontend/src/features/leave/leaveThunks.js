import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLeaves = createAsyncThunk('leave/fetch', async () => {
  const res = await axios.get('http://localhost:5000/api/leave/all');
  return Array.isArray(res.data) ? res.data : res.data.leaves || [];
});

export const applyLeave = createAsyncThunk('leave/apply', async (data) => {
  const res = await axios.post('http://localhost:5000/api/leave/apply', data);
  return res.data;
});