import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FashionListBox from '../MainLayout/FashionListBox';
import InfoBox from '../MainLayout/InfoBox';

export default function MainLayout() {
  return (
    <Box sx={{ flexGrow: 1, ml: 7 }}>
      <Grid container>
        <Grid item xs={9}>
          <FashionListBox />
        </Grid>
        <Grid item xs={3}>
          <InfoBox />
        </Grid>
      </Grid>
    </Box>
  );
}
