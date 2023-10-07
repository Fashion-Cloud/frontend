import { Button } from '@mui/material';

export default function SubmitButton({ sign }: { sign: string }) {
  return (
    <Button
      variant="contained"
      color="info"
      sx={{
        borderRadius: '0.4rem',
        width: '73%',
        height: '2.5rem',
        fontSize: '1.3rem',
        fontFamily: 'Dongle-Bold',
        marginTop: '1.2rem',
        marginBottom: '0.4rem',
      }}
    >
      {sign}
    </Button>
  );
}
