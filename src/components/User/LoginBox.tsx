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

  const { mutate: login } = useLogin(email, pw, (response) => {
    document.cookie = `token = ${response.data.accessToken}`;
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
        onChange={(e: any) => setEmail(e.target.value)}
        type="text"
      />
      <UserLabel label="비밀번호*" />
      <InputBox
        value={pw}
        onChange={(e: any) => setPw(e.target.value)}
        type="password"
      />
      <SubmitButton onClick={handleSubmit} sign="Login" />

      <QuestionLink sign="가입하기" way="/register" />
    </Card>
  );
}
