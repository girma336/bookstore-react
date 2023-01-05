import API from '../http-commen';

const getAll = () => API.get();

const postBook = (book) => API.post('', book);

const deletBook = (id) => API.delete(`${id}`);

const BookService = {
  getAll,
  postBook,
  deletBook,
};

export default BookService;
