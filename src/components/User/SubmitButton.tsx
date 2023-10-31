import { Button } from '@mui/material';

type Props = {
  sign: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
};
export default function SubmitButton({ sign, onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        borderRadius: '0.4rem',
        width: '73%',
        height: '2.5rem',
        fontSize: '1.3rem',
        fontFamily: 'Dongle-Bold',
        marginTop: '1.6rem',
        marginBottom: '0.4rem',
        backgroundColor: '#71B4DC',
      }}
    >
      {sign}
    </Button>
  );
}
