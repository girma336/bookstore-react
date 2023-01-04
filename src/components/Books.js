import React from 'react';
import './Styles/Books.css';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <BookList
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <BookForm />
    </div>
  );
};
export default Books;
