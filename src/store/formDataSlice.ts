import { createSlice } from '@reduxjs/toolkit';
import { FormInput } from '../models/inform-form';

export const dataFormSlice = createSlice({
  name: 'dataForm',
  initialState: {
    data: [],
  },
  reducers: {
    addDataForm(state, action) {
      const newItem: FormInput = action.payload;
      (state.data as FormInput[]).push(newItem);
    },
  },
});

export const { addDataForm } = dataFormSlice.actions;

export default dataFormSlice.reducer;
