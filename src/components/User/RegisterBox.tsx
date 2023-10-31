import { Card } from '@mui/material';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import { useSignup } from 'src/api/hook/UserHook';

import logoUrl from '../../../public/title-logo.png';
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
  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
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
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <Image
        style={{
          width: '19rem',
          height: '4rem',
          marginBottom: '1rem',
          marginTop: '1rem',
        }}
        src={logoUrl}
        alt="logo"
      />
      <div
        style={{
          position: 'relative',
        }}
      >
        <Image
          alt="사용자 프로필 사진"
          src={userImage}
          width={115}
          height={110}
        />
        <button
          style={{
            position: 'absolute',
            borderRadius: '50%',
            cursor: 'pointer',
            width: '28px',
            height: '28px',
            bottom: '9px',
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        onKeyPress={handleOnKeyPress}
        type="text"
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
      <SubmitButton onClick={handleSubmit} sign="Sign Up" />
      <QuestionLink sign="로그인" way="/login" />
    </Card>
  );
}
