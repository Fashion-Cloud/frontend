import {
    Box
} from '@mui/material';
import cloudyIcon from '../../assets/weather/WeatherIcon_Cloudy.png';

export default function Weather(){
    

    return(
        <div>
            <Box
                style={{
                    width: '500px',
                    height: '520px',
                    background: 'rgba(255, 255, 255, 0.75)',
                    // backdropFilter: 'blur(41.234px)',
                    borderRadius: '77px',
                }}
                sx={{
                    mt: '-450px', ml: '1120px'
                }}
            />
            <Box sx={{position: 'absolute', ml: '1170px', mt: '-390px'}}>
                <img
                    style={{ width: "330px"}}
                    src={cloudyIcon}
                    alt="weather"
                />
            </Box>
        </div>
    )
}