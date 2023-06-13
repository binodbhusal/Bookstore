import { createSlice } from '@reduxjs/toolkit';
import Data from '../../components/Data';

const initialState = Data;

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      const newBook = {
        id: Date.now(),
        title,
        author,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.id !== bookId);
    },

  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
