import {
    Box, 
    IconButton,
} from '@mui/material';
import axios from 'axios';
import { type } from '../../../utils/types';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

type SkyProps = {
    searchTemp: number | undefined;
    getWeatherData: Function;
}

export default function WeatherSelect({searchTemp, getWeatherData}: SkyProps) {
    const weatherSearchAPI = async (skyCode: number, rainfallCode: number) => {
        if (skyCode!==undefined && rainfallCode!==undefined && searchTemp!==undefined){
            try {
                console.log("searchSky: ", skyCode)
                console.log("searchRain: ", rainfallCode)
                console.log("searchTemp: ", searchTemp)
                await axios.post('/api/v1/posts/weather',
                {
                    skyCode: {skyCode},
                    rainfallCode: {rainfallCode},
                    windChill: {searchTemp},
                }
            ).then((response) => {
                console.log("WeatherSearchAPI 결과: ", response)
                getWeatherData(response.data)
            });
            } catch {
                console.log("api 불러오기 실패")
            };
        }
    }

    function getSkyData(data: string) {
        let skyCode: number = 0;
        let rainfallCode: number = 0;
        console.log("data: ", data)

        if (data === 'sunny') {
            skyCode = 1;
            rainfallCode = 0;
        } else if (data === 'cloudy'){
            skyCode = 3;
            rainfallCode = 0;
        } else if (data === 'rain'){
            skyCode = 0;
            rainfallCode = 1;
        } else if (data === 'snow'){
            skyCode = 0;
            rainfallCode = 3;
        }

        weatherSearchAPI(skyCode, rainfallCode)
    }

    return(
        <Box textAlign="center" sx={{background: '#FFFFFF', width: 300, borderRadius: '30px', ml: 2, mt: -14, mb: 5}}>
            <IconButton onClick={() => (getSkyData('sunny'))} sx={{ml: 3, mt: 0.5, mb: 0.5}}>
                <WbSunnyIcon/>
            </IconButton>
            <IconButton onClick={() => {getSkyData('cloudy')}} sx={{ml: 3}}>
                <CloudIcon/>
            </IconButton>
            <IconButton onClick={() => {getSkyData('rain')}} sx={{ml: 3}}>
                <UmbrellaIcon/>
            </IconButton>
            <IconButton onClick={() => {getSkyData('snow')}} sx={{ml: 3, mr: 3}}>
                <AcUnitIcon/>
            </IconButton>
        </Box>
    )
}
// 날씨 선택 / 슬라이더 왼쪽으로 이동, 
// 한줄로 정리
// <Box textAlign="center" sx={{background: '#FFFFFF', width: '300px', borderRadius: '30px', ml: 30, mb: -20}}>