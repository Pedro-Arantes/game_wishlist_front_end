import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.testApi
});

export default instance;