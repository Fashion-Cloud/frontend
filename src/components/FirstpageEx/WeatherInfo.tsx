import {
    Box, Typography,
} from '@mui/material';
import { useWeatherMockData } from '../../assets/mocks/useWeatherMockData';

export default function WeatherInfo(){
    const {weather, isLoading} = useWeatherMockData();

    if(isLoading){
        return <div>Loading...</div>;
    }

    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box style={{color: '#343434'}} sx={{position: 'absolute', ml: 10, mt: -25}}>
            <Typography
                fontSize='30pt'
                fontFamily='Inter'
                fontWeight='700'
            >
                {/* {weather?.place} */}
                Seoul, Korea
            </Typography>
            <Typography
                fontSize='110px'
                fontFamily='Inter'
                fontWeight='500'
                sx={{ml: 5, mt: 2}}
            >
                {weather?.temperature}
            </Typography>
            <Typography
                fontSize='40pt'
                fontWeight='700'
                sx={{ml: 25, mt: -20}}
            >
                {Temperature()}
            </Typography>
            <Typography
                fontSize='30pt'
                fontWeight='700'
                sx={{ml: 27, mt: -7.8}}
            >
                C
            </Typography>
            <Typography
                fontSize='30pt'
                fontWeight='500'
                sx={{ mt: 8}}
                // sx={{ml: 7, mt: 8}}
            >
                {weather?.sky}
            </Typography>
        </Box>
    )
}