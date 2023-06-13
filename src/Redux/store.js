import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoryReducer from './category/categorySlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});
export default store;
