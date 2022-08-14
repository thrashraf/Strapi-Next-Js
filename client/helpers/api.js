// api.js
import Axios from 'axios';

let urls = {
  development: 'http://localhost:1337/',
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
