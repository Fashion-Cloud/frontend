import {
    Box, Typography,
} from '@mui/material';
import WeatherIcon from './WeatherIcon';
import WeatherName from './WeatherName';
import WeatherNameInfo from './WeatherNameInfo';
import WeatherTemp from './WeatherTemp';

export default function SmallWeather() {
    return(
        <Box 
            style={{
                color: '#343434', 
                width: '400px',
                height: '540px',
                // background: 'rgba(255, 255, 255, 0.75)',
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '77px',
            }} 
            sx={{border: 1, borderColor:'#FFFFFF', ml: '80px', mt: '-878px'}}
        >
            <WeatherIcon/>
            <WeatherTemp/>
            <WeatherName/>
            <WeatherNameInfo/>
        </Box> 
    )
}