import { 
    Box,
    Divider,
    Typography,
} from "@mui/material";
import { useWeatherMockData } from '../../assets/mocks/useWeatherMockData';

export default function WeatherNameInfo(){
    const {weather, isLoading} = useWeatherMockData();

    if(isLoading){
        return <div>Loading...</div>;
    }

    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', mt: '340px', ml: '170px'}}>
            <Divider style={{width: '100px'}}/>
            <Typography fontSize='23px' >
                {weather?.hourRainfall}
            </Typography>
            <Divider/>
            <Typography fontSize='23px' >
                {weather?.humidity}
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                {weather?.rainfallType}
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                {weather?.windSpeed}
            </Typography>
            <Divider/>
        </Box>
    )
}