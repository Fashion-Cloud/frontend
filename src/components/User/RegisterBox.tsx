import { Avatar, Card } from '@mui/material';
import userImage from 'src/assets/images/user.png';

import InputBox from './InputBox';
import QuestionLink from './QuestionLink';
import SubmitButton from './SubmitButton';
import UserLabel from './UserLabel';

export default function RegisterBox() {
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
          fontFamily: 'Dongle-Bold',
        }}
      >
        Fashion Cloud
      </div>
      <div style={{ position: 'relative' }}>
        <Avatar
          alt="사용자 프로필 사진"
          src={userImage}
          sx={{
            width: 120,
            height: 120,
          }}
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
      <InputBox type="text" />
      <UserLabel label="이메일*" />
      <InputBox type="text" />
      <UserLabel label="비밀번호*" />
      <InputBox type="password" />
      <SubmitButton sign="Sign Up" />
      <QuestionLink sign="로그인" way="/login" />
    </Card>
  );
}
