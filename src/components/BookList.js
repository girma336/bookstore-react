import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaCircleNotch } from 'react-icons/fa';
import { removeBook } from '../redux/books/books';

const BookList = ({
  author, title, id, category,
}) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className="book-container">
        <div className="part-one">
          <div>
            <p className="catagory">{category}</p>
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
          <FaCircleNotch className="icon-complete" />
          <div className="complete">
            <p className="percent-com">90 %</p>
            <p className="text-com">complated</p>
          </div>
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
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default BookList;
