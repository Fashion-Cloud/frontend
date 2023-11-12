import Cookies from 'js-cookie';
import router from 'next/router';
import { useMutation } from 'react-query';

import { UserService } from '../service/UserService';

export const useLogin = (
  email: string,
  password: string,
  onSuccess: (response: any) => void
) => {
  return useMutation({
    mutationFn: () => UserService.login(email, password),
    onSuccess: onSuccess,
    onError: () => alert('다시 로그인 해주세요.'),
  });
};

export const useSignup = (
  email: string,
  password: string,
  username: string,
  onSuccess: () => void
) => {
  return useMutation({
    mutationFn: () => UserService.signup(email, password, username),
    onSuccess: onSuccess,
    onError: () => alert('다시 회원가입 해주세요.'),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => UserService.logout(),
    onSuccess: () => {
      Cookies.remove('accessToken');
      router.replace('login');
    },
    onError: () => alert('다시 로그아웃 해주세요.'),
  });
};
