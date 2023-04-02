import {
    Box,
    Typography
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function WeatherTemp(){
    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', ml: '10px', mt: '40px'}}>
            <PlaceOutlinedIcon fontSize="large" sx={{position: 'absolute', ml: '30px', mt: '15px'}}/>
            <Typography
                fontSize='45px'
                fontFamily='Inter'
                fontWeight='500'
                sx={{ml: '75px'}}
                style={{textAlign: 'center'}}
            >
                Seoul, Korea
            </Typography>
            <Typography
                fontSize='130px'
                fontFamily='Inter'
                fontWeight='300'
                style={{textAlign: 'center'}}
            >
                26
            <Typography
                fontSize='50px'
                fontWeight='500'
                sx={{ml: '180px', mt: '-190px'}}
            >
                {Temperature()}
            </Typography>
            <Typography
                fontSize='40px'
                fontWeight='500'
                sx={{ml: '230px', mt: '-60px'}}
            >
                C
            </Typography>
            </Typography>
            <Typography
                fontSize='45px'
                fontWeight='500'
                style={{textAlign: 'center', marginTop: '90px'}}
            >
                Cloudy
            </Typography>
        </Box>
    )
}