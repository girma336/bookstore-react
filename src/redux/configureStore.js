import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});
const store = configureStore({
  reducer: reducers,
});

export default store;
