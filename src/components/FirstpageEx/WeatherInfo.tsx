import {
    Box, Typography,
} from '@mui/material';

export default function WeatherInfo(){
    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box style={{color: '#343434'}} sx={{position: 'absolute', ml: 9, mt: -25}}>
            <Typography
                fontSize='30pt'
                fontFamily='Inter'
                fontWeight='700'
            >
                Seoul, Korea
            </Typography>
            <Typography
                fontSize='110px'
                fontFamily='Inter'
                fontWeight='500'
                sx={{ml: 6, mt: 1}}
            >
                26
            </Typography>
            <Typography
                fontSize='40pt'
                fontWeight='700'
                sx={{ml: 23, mt: -20}}
            >
                {Temperature()}
            </Typography>
            <Typography
                fontSize='30pt'
                fontWeight='700'
                sx={{ml: 25.5, mt: -7.8}}
            >
                C
            </Typography>
            <Typography
                fontSize='30pt'
                fontWeight='500'
                sx={{ml: 7, mt: 8}}
            >
                Cloudy
            </Typography>
        </Box>
    )
}