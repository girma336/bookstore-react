import '../Styles/AddBook.css';

const AddBook = () => (
  <div className="form-add-book">
    <h1 className="add-new-book">Add New Books</h1>
    <form className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Book..."
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add Author..."
      />
      <button className="input-submit" type="button">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default AddBook;
