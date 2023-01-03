const books = [{
  author: 'Frank Herbert',
  title: 'Dune',
  id: 0,
},
{
  author: 'Berhanu Tarekegn',
  title: 'Time mach',
  id: 2,
},

{
  author: 'Girma Trekegn',
  title: 'Money',
  id: 3,
}];

const ADD_BOOK = 'bookstore-react/books/add-book';
const REMOVE_BOOK = 'bookstore-react/books/remove-book';

export const addBook = (newBook) => (dispatch) => {
  dispatch({ type: ADD_BOOK, payload: newBook });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({ type: REMOVE_BOOK, payload: id });
};

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
