import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ApiLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NL4Xrq90TbvIV9xpEIgQ/books';

export const postNewBooks = createAsyncThunk('books/postBooks', async (book) => {
  await axios.post(ApiLink, {
    item_id: Date.now().toString(),
    title: book.title,
    category: book.category,
    author: book.author,
  });
  return book;
});
export const fetchData = createAsyncThunk('fetchData', async () => {
  try {
    const res = await axios.get(ApiLink);
    const booksArr = Object.keys(res.data).map((key) => ({
      item_id: key,
      ...res.data[key][0],
    }));
    return booksArr;
  } catch (error) {
    return error;
  }
});
export const removeData = createAsyncThunk('books/removeData', async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NL4Xrq90TbvIV9xpEIgQ/books/${id}`);
  return id;
});
