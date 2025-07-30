import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://flowleave-backend.onrender.com';

export const fetchUsers = createAsyncThunk('user/fetch', async ({ page, limit }) => {
  const res = await axios.get(`${BASE_URL}/users?page=${page}&limit=${limit}`);
  return Array.isArray(res.data) ? res.data : res.data.users || [];
});

export const registerUser = createAsyncThunk('user/register', async (data) => {
  const res = await axios.post(`${BASE_URL}/users`, data);
  return res.data;
});
