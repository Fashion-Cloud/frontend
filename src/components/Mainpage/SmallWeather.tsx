import {
    Box,
} from '@mui/material';
import WeatherIcon from './WeatherIcon';
import WeatherName from './WeatherName';
import WeatherNameInfo from './WeatherNameInfo';
import WeatherTemp from './WeatherTemp';

import useGeoLocation from "../../assets/hooks/useGeoLocation";

export default function SmallWeather() {
    const location = useGeoLocation();

    return(
        <Box 
            position='absolute'
            style={{
                color: '#343434', 
                width: '350px',
                height: '500px',
                // background: 'rgba(255, 255, 255, 0.75)',
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '77px',
            }} 
            sx={{border: 1, borderColor:'#FFFFFF', ml: '150px', mt: '-700px'}}
        >
            <WeatherIcon/>
            <WeatherTemp/>
            <WeatherName/>
            <WeatherNameInfo/>

            {/* <Box style={{marginTop: -10}}>
                {
                    location.loaded
                        ? JSON.stringify(location)
                    : "Location data not available yet."
                }
            </Box> */}
        </Box> 
    )
}