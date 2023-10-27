import { InputBase, Paper } from '@mui/material';

type Props = {
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLDivElement>;
};

export default function InputBox({ type, value, onChange, onKeyPress }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid #ccc',
        borderRadius: '0.4rem',
        width: '73%',
        height: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem', // 내부 여백
        marginBottom: '0.3rem',
      }}
    >
      <InputBase
        fullWidth
        type={type}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        sx={{ fontSize: '0.9rem', fontWeight: 'bold' }} // 텍스트 필드의 스타일
      />
    </Paper>
  );
}
