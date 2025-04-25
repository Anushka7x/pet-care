// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // placeholder for now
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
