import {
    Box
} from '@mui/material';
import cloudyIcon from '../../assets/images/weather/WeatherIcon_Cloudy.png';
import WeatherInfo from './WeatherInfo';

export default function Weather(){
    

    return(
        <div>
            <Box
                style={{
                    width: '400px',
                    height: '420px',
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(41.234px)',
                    borderRadius: '77px',
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
        </div>
    )
}