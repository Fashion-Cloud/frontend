import axios from 'axios';
console.log(process.env.NEXT_PUBLIC_API);

const baseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseInstance;
