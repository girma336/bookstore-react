import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import './components/Styles/BookContainer.css';
import Catagory from './components/Categories';
import Books from './components/Books';

const BookContainer = () => (
  <div className="container">
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      ;
      <Route path="/category" element={<Catagory />} />
      ;
    </Routes>

  </div>
);

export default BookContainer;
