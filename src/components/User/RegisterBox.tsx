import { Card } from '@mui/material';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import { useSignup } from 'src/api/hook/UserHook';

import userImage from '../../assets/images/user.png';
import InputBox from './InputBox';
import QuestionLink from './QuestionLink';
import SubmitButton from './SubmitButton';
import UserLabel from './UserLabel';

export default function RegisterBox() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const { mutate: signup } = useSignup(email, pw, name, () => {
    alert('회원가입이 성공적으로 되었습니다.');
    router.push('/login');
  });

  const handleSubmit = async () => {
    // @ts-ignore
    event.preventDefault();
    if (!email || !pw || !name) {
      alert('모든 필수 항목들을 입력해주세요.');
      return;
    }
    signup();
  };

  return (
    <Card
      sx={{
        height: '38rem',
        width: '24.9rem',
        borderRadius: '2.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
        }}
      >
        Fashion Cloud
      </div>
      <div style={{ position: 'relative' }}>
        <Image
          alt="사용자 프로필 사진"
          src={userImage}
          width={120}
          height={120}
        />
        <button
          style={{
            position: 'absolute',
            borderRadius: '50%',
            cursor: 'pointer',
            width: '28px',
            height: '28px',
            bottom: '18px',
            right: '18px',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            backgroundColor: '#9a9a9b',
          }}
        >
          +
        </button>
      </div>

      <UserLabel label="이름*" />
      <InputBox
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        type="text"
      />
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
      <SubmitButton onClick={handleSubmit} sign="Sign Up" />
      <QuestionLink sign="로그인" way="/login" />
    </Card>
  );
}
