import React from 'react';
import Books from '../Pages/Books';
import AddBook from './AddBook';

const Book = () => {
  const books = [{
    author: 'Frank Herbert',
    category: 'Science Fiction',
    id: 'mock-2',
    title: 'Dune',
  },
  {
    author: 'Berhanu Tarekegn',
    category: 'Science Fiction',
    id: 'mock-8',
    title: 'Time mach',
  },

  {
    author: 'Girma Trekegn',
    category: 'Action',
    id: 'mock-7',
    title: 'Money',
  },
  ];
  return (
    <div>
      {books.map((book) => (
        <Books key={book.id} book={book} />
      ))}
      <AddBook />
    </div>
  );
};
export default Book;
