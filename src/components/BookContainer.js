import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import './Styles/BookContainer.css';
import Catagory from './Pages/Categories';
import Book from './Books/Book';

const BookContainer = () => (
  <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" element={<Book />} />
      ;
      <Route path="/category" element={<Catagory />} />
      ;
    </Routes>

  </div>
);

export default BookContainer;
