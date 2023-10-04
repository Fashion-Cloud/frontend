import { Typography } from '@mui/material';

export default function QuestionLink({
  sign,
  way,
}: {
  sign: string;
  way: string;
}) {
  return (
    <Typography sx={{ marginTop: 2, fontSize: '14px' }}>
      이미 계정이 있다면?{' '}
      <a href={way} style={{ textDecoration: 'none', color: '#5e8ac9' }}>
        {sign}
      </a>
    </Typography>
  );
}
