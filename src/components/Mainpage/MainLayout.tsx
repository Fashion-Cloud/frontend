import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InfoBox from '../MainLayout/InfoBox';
import FashionListBox from '../MainLayout/FashionListBox';

export default function MainLayout() {
    return(
        <Box sx={{ flexGrow: 1, ml: 7}}>
            <Grid container>
                <Grid item xs={9}>
                    {/* <Item>xs=9</Item> */}
                    <FashionListBox/>
                </Grid>
                <Grid item xs={3}>
                    {/* <Item>xs=3</Item> */}
                    <InfoBox/>
                </Grid>
            </Grid>
        </Box>
    )
}