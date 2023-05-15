import {
    Box,
} from '@mui/material';
import WeatherIcon from './WeatherIcon';
import WeatherName from './WeatherName';
import WeatherNameInfo from './WeatherNameInfo';
import WeatherTemp from './WeatherTemp';

import useGeoLocation from "../../assets/hooks/useGeoLocation";
import { useEffect, useState } from "react";

import axios from 'axios';
import { type } from '../../utils/types';
import weatherSky from '../../assets/data/weatherSky';

export default function SmallWeather() {
    const [weather, setWeather] = useState<type.WeatherType>();
    const [locationData, setLocationData] = useState<type.LocationType>();
    const [skyName, setSkyName] = useState<string>();

    const location = useGeoLocation();
    let latitude: number | undefined
    let longitude: number | undefined

    const tempAPI = async () => {
        if(latitude !== undefined){
            try {
                await axios.get(`/api/v1/weather?latitude=${latitude}&longitude=${longitude}`,
                {
                    headers: {
                        Accept: 'application/json'
                    },
                    withCredentials: true
                }
            ).then((response) => {
                const data = response.data.data;
                console.log("[WexatherTemp] tempAPI: ", data)
                setWeather(data)
                setSkyName(weatherSky(data.sky))
            });
            } catch {
                console.log("[WeatherTemp] tempAPI: api 불러오기 실패")
            };
        }
    }
    const locationAPI = async () => {
        if(location !== undefined){
            try {
                await axios.get(`/api/v1/address?latitude=${latitude}&longitude=${longitude}`,
                {
                    headers: {
                        Accept: 'application/json'
                    },
                }
            ).then((response) => {
                console.log("response: ", response)
                const data = response.data.data;
                console.log("[WeatherTemp] locationAPI: ", data)
                setLocationData(data)
            });
            } catch {
                console.log("[WeatherTemp] locationAPI: api 불러오기 실패")
            };
        }
    }

    useEffect(() => {
        if (location !== undefined) {
            latitude = location.coordinates?.lat;
            longitude = location.coordinates?.lng;
            console.log("[GeoLocation] latitude: " , latitude)
            console.log("[GeoLocation] longitude: " , longitude)

            locationAPI()
            tempAPI()
        }
    }, [location])

    return(
        <Box 
            position='absolute'
            style={{
                color: '#343434', 
                width: '350px',
                height: '500px',
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '77px',
            }} 
            sx={{border: 1, borderColor:'#FFFFFF', ml: '150px', mt: '-700px'}}
        >
            <WeatherIcon/>
            <WeatherTemp weather={weather} skyName={skyName} locationData={locationData}/>
            <WeatherName/>
            <WeatherNameInfo weather={weather}/>
        </Box> 
    )
}