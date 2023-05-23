import {
    Box
} from '@mui/material'; 
import cloudyIcon from '../../assets/images/weather/WeatherIcon_Cloudy.png';
import WeatherInfo from './WeatherInfo';

export default function WeatherBox(){
    

    return(
        <Box
            style={{
                width: '400px',
                height: '420px',
                background: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(41.234px)',
                borderRadius: '77px',
                boxShadow: "19.6184px 65.3947px 189.645px rgba(161, 35, 35, 0.2)"
            }}
            sx={{
                mt: '-330px', ml: '850px'
            }}
        >
            <img
                style={{ width: "200px", marginLeft: 70, marginTop: 100}}
                src={cloudyIcon}
                alt="weather"
            />
            <WeatherInfo/>
        </Box>
    )
}