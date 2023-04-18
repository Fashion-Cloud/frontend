import {
    Box,
    Typography
} from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';
import { type } from '../../utils/types';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';


export default function WeatherTemp(){
    const [weather, setWeather] = useState<type.WeatherType>();
    const [location, setLocation] = useState<type.LocationType>();

    const tempAPI = async () => {
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
    const locationAPI = async () => {
        try {
            await axios.get<type.LocationType>(`/api/v1/address?latitude=37&longtitude=126`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            const data = response.data;
            console.log(data)
            setLocation(data)
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    useEffect(() => {
        tempAPI()
        locationAPI()
    }, [])

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
                sx={{ml: '80px'}}
            >
                {location?.region2depth}
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