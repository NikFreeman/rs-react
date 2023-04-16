import { createSlice } from '@reduxjs/toolkit';

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: 'random',
  reducers: {
    setValue: (_state, action) => action.payload,
  },
});

export const { setValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
