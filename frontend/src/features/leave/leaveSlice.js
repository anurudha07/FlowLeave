import { createSlice } from '@reduxjs/toolkit';
import { fetchLeaves, applyLeave } from './leaveThunks';

const leaveSlice = createSlice({
  name: 'leave',
  initialState: { list: [], status: 'idle', error:null },
  extraReducers: builder => {
    builder
      .addCase(fetchLeaves.fulfilled, (state, action) => { state.list = action.payload; })
      .addCase(applyLeave.fulfilled, (state, action) => { state.list.push(action.payload); });
  }
});

export default leaveSlice.reducer;