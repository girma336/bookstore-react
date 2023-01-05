import axios from 'axios';

const API_ID = '2hlWNzEhOurzQ9QMr12c';

export default axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`,
  headers: {
    'Content-type': 'application/json',
  },
});
