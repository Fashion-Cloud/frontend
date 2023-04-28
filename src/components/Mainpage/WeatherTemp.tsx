import {
    Box,
    Typography
} from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';
import { type } from '../../utils/types';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import weatherSky from '../../assets/data/weatherSky';

type LocationProps = {
    latitude: number | undefined;
    longitude: number | undefined;
}

export default function WeatherTemp({latitude, longitude}: LocationProps){
    const [temp, setTemp] = useState<type.WeatherType>();
    const [location, setLocation] = useState<type.LocationType>();
    const [skyName, setSkyName] = useState<string>();

    const tempAPI = async () => {
        try {
            await axios.get<type.WeatherType>(`/api/v1/weather?latitude=${latitude}&longtitude=${longitude}`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            const data = response.data;
            console.log("[WeatherTemp] tempAPI: ", data)
            setTemp(data)
            setSkyName(weatherSky(data.sky))
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }
    const locationAPI = async () => {
        try {
            await axios.get<type.LocationType>(`/api/v1/address?latitude=${latitude}&longtitude=${longitude}`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            const data = response.data;
            console.log("[WeatherTemp] locationAPI: ", data)
            // console.log("[WeatherTemp] latitude: ", latitude)
            // console.log("[WeatherTemp] longitude: ", longitude)
            setLocation(data)
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    useEffect(() => {
        tempAPI()
        locationAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', ml: '10px', mt: '40px'}}>
            <PlaceOutlinedIcon fontSize="large" sx={{position: 'absolute', ml: '37px', mt: '5px'}}/>
            <Typography
                fontSize='30px'
                fontFamily='CookieRun-Regular'
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
                {temp?.temperature}
            </Typography>
            <Typography
                fontSize='35px'
                fontWeight='500'
                sx={{ml: '220px', mt: '-150px'}}
            >
                {Temperature()}
                C
            </Typography>
            <Typography
                fontFamily='CookieRun-Regular'
                fontSize='30px'
                fontWeight='500'
                style={{textAlign: 'center', marginTop: 80, marginLeft: 58}}
            >
                {skyName}
            </Typography>
        </Box>
    )
}