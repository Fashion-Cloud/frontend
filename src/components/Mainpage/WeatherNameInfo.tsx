import { 
    Box,
    Divider,
    Typography,
} from "@mui/material";
import { type } from '../../utils/types';

type WeatherProps = {
    weather: type.WeatherType | undefined;
}

export default function WeatherNameInfo({weather}: WeatherProps){
    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', mt: '340px', ml: '170px'}}>
            <Divider style={{width: '100px'}}/>
            <Typography fontSize='23px' >
                {weather?.humidity} %
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                {weather?.windSpeed} m/s
            </Typography>
            <Divider/>
            <Typography fontSize='23px' >
                {weather?.hourRainfall} mm
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                {weather?.rainfallType} .
            </Typography>
            <Divider/>
        </Box>
    )
}