import axios from 'axios';
import Cookies from 'js-cookie';

const apiV1Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});
apiV1Instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default apiV1Instance;
