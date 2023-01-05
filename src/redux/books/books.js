import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BookService from '../../services/service';

const ADD_BOOK = 'bookstore-react/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react/REMOVE_BOOK';
const GET_BOOK = 'bookstore-react/GET_BOOK';

export const getBook = createAsyncThunk(GET_BOOK, async () => {
  try {
    const response = await BookService.getAll();
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const addBook = createAsyncThunk(ADD_BOOK, async (payload, thunkAPI) => {
  try {
    await BookService.postBook(payload);
    thunkAPI.dispatch(getBook());
  } catch (error) {
    throw new Error(error);
  }
});

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (payload, thunkAPI) => {
    try {
      await BookService.deletBook(payload);
      thunkAPI.dispatch(getBook());
    } catch (error) {
      throw new Error(error);
    }
  },
);

const bookSlice = createSlice({
  name: 'book-store',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getBook.fulfilled, (state, action) => action.payload);
  },
});

const BookReducer = bookSlice.reducer;
export default BookReducer;
