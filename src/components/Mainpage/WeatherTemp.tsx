import {
    Box,
    Typography
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import { useWeatherMockData } from '../../assets/mocks/useWeatherMockData';

export default function WeatherTemp(){
    const {weather, isLoading} = useWeatherMockData();

    if(isLoading){
        return <div>Loading...</div>;
    }

    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', ml: '10px', mt: '40px'}}>
            <PlaceOutlinedIcon fontSize="large" sx={{position: 'absolute', ml: '37px', mt: '5px'}}/>
            <Typography
                fontSize='30px'
                fontFamily='Inter'
                fontWeight='500'
                sx={{ml: '75px'}}
            >
                {/* {weather?.place} */}
                Seoul, Korea
            </Typography>
            <Typography
                fontSize='100px'
                fontFamily='Inter'
                fontWeight='300'
                style={{textAlign: 'center'}}
                sx={{ml: 4, mt: 3}}
            >
                {weather?.temperature}
            <Typography
                fontSize='50px'
                fontWeight='500'
                sx={{ml: '150px', mt: '-150px'}}
            >
                {Temperature()}
            </Typography>
            <Typography
                fontSize='35px'
                fontWeight='500'
                sx={{ml: '200px', mt: '-60px'}}
            >
                C
            </Typography>
            </Typography>
            <Typography
                fontSize='40px'
                fontWeight='500'
                style={{textAlign: 'center', marginTop: '70px', marginLeft: 58}}
            >
                {weather?.sky}
            </Typography>
        </Box>
    )
}