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
    category: '',
  });

  const changeHandler = (e) => {
    setNeValue({
      ...newValue,
      item_id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(newValue));
    setNeValue({ title: '', author: '', category: '' });
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
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={changeHandler}
          required
        />
        <button className="input-submit" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default BookForm;
