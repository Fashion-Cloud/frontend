import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InfoBox from './InfoBox';
import FashionList from './FashionList';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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