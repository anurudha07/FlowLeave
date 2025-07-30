import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, registerUser } from './userThunks';

const userSlice = createSlice({
  name: 'user',
  initialState: { list: [], status: 'idle',error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => { state.list = action.payload; })
      .addCase(registerUser.fulfilled, (state, action) => { state.list.push(action.payload); });
  }
});

export default userSlice.reducer;