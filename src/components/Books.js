import React, { useEffect } from 'react';
import './Styles/Books.css';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import { getBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  return (
    <div>
      {Object.keys(books).map((index) => (
        <BookList
          key={index}
          title={books[index][0].title}
          author={books[index][0].author}
          category={books[index][0].category}
          id={index}
        />
      ))}
      <BookForm />
    </div>
  );
};
export default Books;
