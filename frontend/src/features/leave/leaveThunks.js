import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://flowleave-backend.onrender.com/'; 

export const registerUser = createAsyncThunk('user/register', async (data) => {
  const res = await axios.post(`${BASE_URL}/api/users/register`, data); 
  return res.data;
});

export const loginUser = createAsyncThunk('user/login', async (data) => {
  const res = await axios.post(`${BASE_URL}/api/users/login`, data); 
  return res.data;
});
