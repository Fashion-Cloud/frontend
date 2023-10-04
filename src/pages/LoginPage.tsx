import { Box, Grid } from '@mui/material';
import InfoBox from 'src/components/MainLayout/InfoBox';
import LoginBox from 'src/components/User/LoginBox';

export default function LoginPage() {
  return (
    <Box sx={{ width: '100%', height: '100vh', backgroundColor: '#F5F8FC' }}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <LoginBox />
          </div>
        </Grid>
        <Grid item xs={3}>
          <InfoBox />
        </Grid>
      </Grid>
    </Box>
  );
}
