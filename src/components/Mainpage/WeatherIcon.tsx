import {
    Box
} from '@mui/material';
import cloudyIcon from '../../assets/images/weather/WeatherIcon_Cloudy.png';

export default function WeatherIcon(){
    

    return(
        <Box sx={{position: 'absolute', ml: '50px', mt: '85px'}}>
            <img
                style={{ width: "180px"}}
                src={cloudyIcon}
                alt="weather"
            />
        </Box>
    )
}