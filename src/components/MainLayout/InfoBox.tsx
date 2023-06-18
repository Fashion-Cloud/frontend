import { 
    Box 
} from "@mui/material";
import axios from 'axios';
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { weatherDataState, locationDataState } from "../../Recoil";

import useGeoLocation from "../../assets/hooks/useGeoLocation";

import PlaceBox from "./InfoBox/PlaceBox";
import WeatherBox from "./InfoBox/WeatherBox";

export default function InfoBox() {
    const setWeatherData = useSetRecoilState(weatherDataState);
    const setLocationData = useSetRecoilState(locationDataState);

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
        // 10분 간격으로 렌더링
        const interval = setInterval(() => {
            if (location?.coordinates) {
                latitude = location.coordinates?.lat;
                longitude = location.coordinates?.lng;
                console.log("[GeoLocation] latitude: " , latitude)
                console.log("[GeoLocation] longitude: " , longitude)
    
                locationAPI()
                weatherAPI()
            }
        }, 600000);
        
        return () => clearInterval(interval);
    }, [location])

    return (
        <Box sx={{height: '100vh',backgroundColor: '#FBFEFF', position: 'sticky', top: 0, overflow: 'hidden'}}>
            <PlaceBox/>
            <WeatherBox/>
        </Box>
    )
}