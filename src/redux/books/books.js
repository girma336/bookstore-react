const initialState = [];

const ADD_BOOK = 'bookstore-react/books/add-book';
const REMOVE_BOOK = 'bookstore-react/books/remove-book';

export default function reducer(state = initialState, action) {
  switch (action.value) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.newBook],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };

    default:
      return state;
  }
}
export function addBook(newBook) {
  return { type: ADD_BOOK, newBook };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
