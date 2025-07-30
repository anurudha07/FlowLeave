// frontend/src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import leaveReducer from '../features/leave/leaveSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    leave: leaveReducer
  }
});
