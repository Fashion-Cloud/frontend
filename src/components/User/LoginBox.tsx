import { Box, Card } from '@mui/material';
import Image from 'next/image';

import logo from '../../assets/images/bang.png';
import InputBox from './InputBox';
import QuestionLink from './QuestionLink';
import SubmitButton from './SubmitButton';
import UserLabel from './UserLabel';

export default function LoginBox() {
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
          fontFamily: 'Dongle-Bold',
          marginBottom: '3.5rem',
        }}
      >
        Fashion Cloud
      </div>
      <UserLabel label="이메일*" />
      <InputBox type="text" />
      <UserLabel label="비밀번호*" />
      <InputBox type="password" />
      <SubmitButton sign="Login" />
      <QuestionLink sign="가입하기" way="/register" />
    </Card>
  );
}
