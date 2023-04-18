import { createSlice } from '@reduxjs/toolkit';
import { FormInput } from '../models/inform-form';

interface DataFormState {
  data: FormInput[];
}

const initialState: DataFormState = {
  data: [],
};
export const dataFormSlice = createSlice({
  name: 'dataForm',
  initialState,
  reducers: {
    addDataForm(state, action) {
      const newItem: FormInput = action.payload;
      state.data.push(newItem);
    },
  },
});

export const { addDataForm } = dataFormSlice.actions;

export default dataFormSlice.reducer;
