import Cookies from 'js-cookie';
import router from 'next/router';
import { useEffect } from 'react';

const useCheckAuth = () => {
  useEffect(() => {
    const token = Cookies.get('accessToken');

    if (token) {
      router.push('/');
    } else {
      router.push('/login');
    }
  }, []);

  return null;
};

export default useCheckAuth;
