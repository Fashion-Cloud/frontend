import { 
    Box 
} from "@mui/material";
import axios from 'axios';
import { type } from '../../utils/types';
import { useEffect, useState } from "react";

import useGeoLocation from "../../assets/hooks/useGeoLocation";

import PlaceBox from "./PlaceBox";
import WeatherBox from "./WeatherBox";

export default function InfoBox() {
    const [weatherData, setWeatherData] = useState<type.WeatherType>();
    const [locationData, setLocationData] = useState<type.LocationType>();

    const location = useGeoLocation();
    let latitude: number | undefined
    let longitude: number | undefined

    const weatherAPI = async () => {
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
                setWeatherData(data)
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
            // latitude = location.coordinates?.lat;
            // longitude = location.coordinates?.lng;

            latitude = 37.385673;
            longitude = 126.637527;
            
            console.log("[GeoLocation] latitude: " , latitude)
            console.log("[GeoLocation] longitude: " , longitude)

            locationAPI()
            weatherAPI()
        }
    }, [location])

    return (
        <Box sx={{height: '100vh',backgroundColor: '#FBFEFF', position: 'sticky', top: 0, overflow: 'hidden'}}>
            <PlaceBox locationData={locationData}/>
            <WeatherBox weatherData={weatherData}/>
        </Box>
    )
}