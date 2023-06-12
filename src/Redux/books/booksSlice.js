import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.id !== bookId);
    },

  },
});
export const { addBook, removeBook } = booksSlice.actions;
