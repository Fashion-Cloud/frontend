import axios from 'axios';
import {token} from 'src/assets/data/token';

const apiV1Instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
});

export default apiV1Instance;
