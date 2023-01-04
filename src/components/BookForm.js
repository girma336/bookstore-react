import './Styles/AddBook.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newValue, setNeValue] = useState({
    title: '',
    author: '',
  });

  const changeHandler = (e) => {
    setNeValue({ ...newValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: newValue.title,
      author: newValue.author,
    };
    dispatch(addBook(newBook));
    setNeValue({ title: '', author: '' });
  };

  return (
    <div className="form-add-book">
      <h1 className="add-new-book">Add New Books</h1>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="text"
          className="input-text"
          name="title"
          placeholder="Add Book..."
          value={newValue.title}
          onChange={changeHandler}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add Author..."
          value={newValue.author}
          name="author"
          onChange={changeHandler}
        />
        <button className="input-submit" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default BookForm;
