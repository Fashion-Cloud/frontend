import {
    Box, Typography,
} from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';
import { type } from '../../utils/types';

export default function WeatherInfo(){
    const [weather, setWeather] = useState<type.WeatherType>();

    const fashionAPI = async () => {
        try {
            await axios.get<type.WeatherType>(`/api/v1/weather?latitude=37&longtitude=126`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            const data = response.data;
            console.log(data)
            setWeather(data)
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    useEffect(() => {
        fashionAPI()
    }, [])

    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box style={{color: '#343434'}} sx={{position: 'absolute', ml: 10, mt: -25}}>
            <Typography
                fontSize='30pt'
                fontFamily='Inter'
                fontWeight='700'
            >
                {/* {weather?.place} */}
                Seoul, Korea
            </Typography>
            <Typography
                fontSize='110px'
                fontFamily='Inter'
                fontWeight='500'
                sx={{ml: 5, mt: 2}}
            >
                {weather?.temperature}
            </Typography>
            <Typography
                fontSize='40pt'
                fontWeight='700'
                sx={{ml: 25, mt: -20}}
            >
                {Temperature()}
            </Typography>
            <Typography
                fontSize='30pt'
                fontWeight='700'
                sx={{ml: 27, mt: -7.8}}
            >
                C
            </Typography>
            <Typography
                fontSize='30pt'
                fontWeight='500'
                sx={{ mt: 8}}
                // sx={{ml: 7, mt: 8}}
            >
                {weather?.sky}
            </Typography>
        </Box>
    )
}