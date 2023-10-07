import { Box } from '@mui/material';
import TemperatureBox from 'src/components/MainLayout/InfoBox/Temperature';
import RegisterBox from 'src/components/User/RegisterBox';

export default function RegisterPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', height: '100vh', backgroundColor: '#F5F8FC' }}
    >
      <TemperatureBox />
      <RegisterBox />
    </Box>
  );
}
