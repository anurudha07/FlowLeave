import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetch', async ({ page, limit }) => {
  const res = await axios.get(`http://localhost:5000/users?page=${page}&limit=${limit}`);
  return Array.isArray(res.data) ? res.data : res.data.users || [];
});

export const registerUser = createAsyncThunk('user/register', async (data) => {
  const res = await axios.post('http://localhost:5000/users', data);
  return res.data;
});