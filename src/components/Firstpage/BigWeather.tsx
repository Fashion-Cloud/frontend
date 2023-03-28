import {
    Box, Typography
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import weatherIcon from  "../../assets/weather/WeatherIcon_Cloudy.png"
import '../../fonts/font.css';

export default function BigWeather(){
    function Temperature() {
        return <span>&deg;</span>;
    }

    return(
        <Box 
            borderRadius='10%'
            style={{
                position: 'absolute',
                top: '200px',
                left: '150px',
                width: '650px',
                height: '800px',
                // backgroundColor: '#FFFFFF',
                color: '#FFFFFF'
            }}
            sx={{
                border: 1,
            }}
        >
            <PlaceOutlinedIcon 
                style={{
                    width: '60px',
                    height: '60px'
                }}
                sx={{ml: '80px', mt: '60px'}}
            />
            <Typography
                fontSize='40px'
                sx={{ml: '170px', mt: '-65px'}}
            >
                Seoul, Korea
            </Typography>
            <Box sx={{ml: '80px', mt: '70px'}}>
                <img
                    style={{ height: "130px"}}
                    src={weatherIcon}
                    alt="weather"
                />
            </Box>
            <Typography
                fontSize='120px'
                style={{}}
                fontFamily='Inter'
                fontWeight='100'
                sx={{ml: '90px', mt: '-20px', textShadow: '2px 2px 2px gray'}}
            >
                27
            </Typography>
            <Typography
                fontSize='50px'
                fontWeight='100'
                sx={{ml: '250px', mt: '-170px', textShadow: '2px 2px 2px gray'}}
            >
                {Temperature()}
            </Typography>
            <Typography
                fontSize='45px'
                fontWeight='100'
                sx={{ml: '270px', mt: '-70px', textShadow: '2px 2px 2px gray'}}
            >
                C
            </Typography>
            <Typography
                fontSize='40px'
                style={{}}
                fontFamily='Inter'
                fontWeight='200'
                sx={{ml: '90px', mt: '100px', textShadow: '2px 2px 2px gray'}}
            >
                17th Jun '21
            </Typography>
            <Typography
                fontSize='30px'
                style={{}}
                fontFamily='Inter'
                fontWeight='200'
                sx={{ml: '90px', mt: '100px', textShadow: '2px 2px 2px gray'}}
            >
                1시간 강수량  |  습도  |  강수형태  |  풍속
            </Typography>
        </Box>
    )
}