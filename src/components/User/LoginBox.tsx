import { Box, Card } from '@mui/material';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import useCheckAuth from 'src/api/hook/CheckAuthHook';
import { useLogin } from 'src/api/hook/UserHook';

import logo from '../../assets/images/bang.png';
import InputBox from './InputBox';
import QuestionLink from './QuestionLink';
import SubmitButton from './SubmitButton';
import UserLabel from './UserLabel';

export default function LoginBox() {
  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  useCheckAuth();

  function setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + '; ' + expires + '; path=/';
  }

  const { mutate: login } = useLogin(email, pw, (response) => {
    // document.cookie = `token = ${response.data.accessToken}`;
    setCookie('token', response.data.accessToken, 1);
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
      }}
    >
      <Box sx={{ px: 1.5 }}>
        <Image height={50} src={logo} alt="logo" />
      </Box>
      <div
        style={{
          fontSize: '2rem',
          marginBottom: '3.5rem',
        }}
      >
        Fashion Cloud
      </div>
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
