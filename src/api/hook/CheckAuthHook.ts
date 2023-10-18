import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useCheckAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return value ? value[2] : null;
    };

    const token = getCookie('token');

    if (token) {
      router.push('/');
    } else {
      router.push('/login');
    }
  }, []);

  return null;
};

export default useCheckAuth;
