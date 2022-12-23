import React from 'react';
import '../Styles/Books.css';
import PropTypes from 'prop-types';

const Books = ({ book }) => {
  Books.propTypes = {
    book: PropTypes.shape({
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  };
  Books.defaultProps = {
    book: null,
  };
  return (
    <div>
      <div className="book-container">
        <div className="part-one">
          <div>
            <p className="catagory">{book.category}</p>
            <h2 className="title">{book.title}</h2>
            <p className="author">{book.author}</p>
          </div>

          <div className="button-nav">
            <button className="noborder" type="button">Comment</button>
            <button className="noborder" type="button">Remove</button>
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
export default Books;
