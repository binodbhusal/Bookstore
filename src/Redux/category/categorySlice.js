import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducer: {
    categoryStatus: () => 'Under Construction',
  },
});
export const { categoryStatus } = categorySlice.actions;
export default categorySlice.reducer;