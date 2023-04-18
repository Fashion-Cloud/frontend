import {
    Box,
    Button,
    Divider,
    Grid,
    Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddLocation from './AddFashion/AddLocation';
import AddReview from './AddFashion/AddReview';
import AddTitle from './AddFashion/AddTitle';
import AddWeatherInfo from './AddFashion/AddWeatherInfo';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AddFashion() {
    return(
        <div>
            <Box sx={{ flexGrow: 1, mt: 2,  mx: 1}}>
                <Grid  container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Item>xs=6 md=6</Item>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <AddTitle/>
                        <AddReview/>

                        <Divider sx={{mt: 2, mb: 2}}/>

                        <AddLocation/>
                        <AddWeatherInfo/>
                    </Grid>
                </Grid>
            </Box>
            <Button style={{position: 'absolute', justifyContent: 'center'}}>
                Post
            </Button>
        </div>
    )
}