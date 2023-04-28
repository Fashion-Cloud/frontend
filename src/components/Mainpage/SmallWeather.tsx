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
    let latitude: number | undefined
    let longitude: number | undefined

    if (location !== undefined) {
        latitude = location.coordinates?.lat;
        longitude = location.coordinates?.lng;
        console.log("[GeoLocation] latitude: " , latitude)
        console.log("[GeoLocation] longitude: " , longitude)
    }

    return(
        <Box 
            position='absolute'
            style={{
                color: '#343434', 
                width: '350px',
                height: '500px',
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '77px',
            }} 
            sx={{border: 1, borderColor:'#FFFFFF', ml: '150px', mt: '-700px'}}
        >
            <WeatherIcon/>
            <WeatherTemp latitude = {latitude} longitude = {longitude}/>
            <WeatherName/>
            <WeatherNameInfo/>
        </Box> 
    )
}