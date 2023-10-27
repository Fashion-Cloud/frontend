import axios from 'axios';
import { token } from 'src/assets/data/token';

const apiV1Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default apiV1Instance;
