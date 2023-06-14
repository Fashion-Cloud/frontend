import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InfoBox from '../MainLayout/InfoBox';
import FashionList from '../MainLayout/FashionList';

export default function MainLayout() {
    return(
        <Box sx={{ flexGrow: 1, ml: 7}}>
            <Grid container>
                <Grid item xs={9}>
                    {/* <Item>xs=9</Item> */}
                    <FashionList/>
                </Grid>
                <Grid item xs={3}>
                    {/* <Item>xs=3</Item> */}
                    <InfoBox/>
                </Grid>
            </Grid>
        </Box>
    )
}