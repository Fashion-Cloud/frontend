import { 
    Box,
    Divider,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import { type } from '../../utils/types';

export default function WeatherNameInfo(){
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

    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', mt: '340px', ml: '170px'}}>
            <Divider style={{width: '100px'}}/>
            <Typography fontSize='23px' >
                {weather?.hourRainfall}
            </Typography>
            <Divider/>
            <Typography fontSize='23px' >
                {weather?.humidity}
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                {weather?.rainfallType}
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                {weather?.windSpeed}
            </Typography>
            <Divider/>
        </Box>
    )
}