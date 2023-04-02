import {
    Box, Typography,
} from '@mui/material';

export default function WeatherInfo(){
    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box style={{color: '#343434'}} sx={{position: 'absolute', ml: '1190px', mt: '-450px'}}>
            <Typography
                fontSize='60px'
                fontFamily='Inter'
                fontWeight='700'
            >
                Seoul, Korea
            </Typography>
            <Typography
                fontSize='170px'
                fontFamily='Inter'
                fontWeight='500'
                sx={{ml: '60px', mt: '10px'}}
            >
                26
            </Typography>
            <Typography
                fontSize='50px'
                fontWeight='700'
                sx={{ml: '280px', mt: '-230px'}}
            >
                {Temperature()}
            </Typography>
            <Typography
                fontSize='45px'
                fontWeight='700'
                sx={{ml: '300px', mt: '-60px'}}
            >
                C
            </Typography>
            <Typography
                fontSize='45px'
                fontWeight='500'
                sx={{ml: '110px', mt: '120px'}}
            >
                Cloudy
            </Typography>
        </Box>
    )
}