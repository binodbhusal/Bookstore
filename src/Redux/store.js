import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';
import categorySlice from './category/categorySlice';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    categories: categorySlice.reducer,
  },
});
export default store;
