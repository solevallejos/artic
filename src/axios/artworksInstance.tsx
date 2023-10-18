import axios from 'axios';

const artworksInstance = axios.create({
  baseURL: 'https://api.artic.edu/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default artworksInstance;
