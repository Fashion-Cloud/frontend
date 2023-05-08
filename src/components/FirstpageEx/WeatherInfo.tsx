import {
    Box, Typography,
} from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';
import { type } from '../../utils/types';
import weatherSky from '../../assets/data/weatherSky';

export default function WeatherInfo(){
    const [temp, setTemp] = useState<type.WeatherType>();
    const [skyName, setSkyName] = useState<string>();

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
            setTemp(data)
            setSkyName(weatherSky(data.sky))
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
                fontSize='27pt'
                fontFamily='CookieRun-Regular'
                sx={{ml: 2}}
            >
                {/* {weather?.place} */}
                성남시 분당구
            </Typography>
            <Typography
                fontSize='110px'
                fontFamily='Inter'
                fontWeight='500'
                sx={{ml: 5, mt: 2}}
            >
                {temp?.temperature}
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
                fontFamily='CookieRun-Regular'
                fontSize='25pt'
                fontWeight='500'
                sx={{ml: 12, mt: 8, color: '#585858'}}
            >
                {skyName}
            </Typography>
        </Box>
    )
}