import { createSlice } from '@reduxjs/toolkit';
import { postNewBooks, fetchData, removeData } from './fetchBooks';

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postNewBooks.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(postNewBooks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.status = 'Failed';
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(removeData.fulfilled, (state, action) => {
      const bookId = action.payload;
      state.data = state.data.filter((book) => book.item_id !== bookId);
    });
  },

});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
