import { createSlice } from '@reduxjs/toolkit';

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: 'random',
  reducers: {
    saveValue: (_state, action) => action.payload,
  },
});

export const { saveValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
