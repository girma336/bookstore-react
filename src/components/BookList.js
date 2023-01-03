import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookList = ({ author, title, id }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className="book-container">
        <div className="part-one">
          <div>
            <p className="catagory">{author}</p>
            <h2 className="title">{title}</h2>
            <p className="author">{author}</p>
          </div>

          <div className="button-nav">
            <button className="noborder" type="button">Comment</button>
            <button className="noborder" type="button" onClick={() => handleRemove(id)}>Remove</button>
            <button className="noborder" type="button" style={{ border: 'none' }}>Edit</button>
          </div>
        </div>
        <div className="part-two">
          60 %
        </div>
        <div className="part-three">
          <h4 className="chapter-curr">Current Chapter</h4>
          <p className="current">Chapter 17</p>
          <button className="btn-n" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BookList.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default BookList;