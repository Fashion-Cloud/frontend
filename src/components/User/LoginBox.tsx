import { Card } from '@mui/material';
import Cookies from 'js-cookie';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import useCheckAuth from 'src/api/hook/CheckAuthHook';
import { useLogin } from 'src/api/hook/UserHook';

import logoUrl from '../../../public/title-logo.png';
import InputBox from './InputBox';
import QuestionLink from './QuestionLink';
import SubmitButton from './SubmitButton';
import UserLabel from './UserLabel';

export default function LoginBox() {
  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  useCheckAuth();

  const { mutate: login } = useLogin(email, pw, (response) => {
    const accessToken = response.data.accessToken;
    Cookies.set('accessToken', accessToken, { expires: 1 });
    router.push('/');
  });

  const handleSubmit = async () => {
    // @ts-ignore
    event.preventDefault();
    if (!email || !pw) {
      alert('모든 필수 항목들을 입력해주세요.');
      return;
    }
    login();
  };
  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <Card
      sx={{
        marginLeft: '1.6rem',
        height: '38rem',
        width: '24.9rem',
        borderRadius: '2.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <Image
        src={logoUrl}
        alt="logo"
        style={{
          width: '19rem',
          height: '4rem',
          marginBottom: '5rem',
          marginTop: '1rem',
        }}
      />
      <UserLabel label="이메일*" />
      <InputBox
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        onKeyPress={handleOnKeyPress}
        type="text"
      />
      <UserLabel label="비밀번호*" />
      <InputBox
        value={pw}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPw(e.target.value)
        }
        onKeyPress={handleOnKeyPress}
        type="password"
      />
      <SubmitButton onClick={handleSubmit} sign="Login" />

      <QuestionLink sign="가입하기" way="/register" />
    </Card>
  );
}
