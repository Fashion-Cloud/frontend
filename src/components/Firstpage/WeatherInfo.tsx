import {
    Box, Typography,
} from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';
import { type } from '../../utils/types';
import weatherSky from '../../assets/data/weatherSky';
import useGeoLocation from "../../assets/hooks/useGeoLocation";


export default function WeatherInfo(){
    const [temp, setTemp] = useState<type.WeatherType>();
    const [skyName, setSkyName] = useState<string>();
    const [locationName, setLocationName] = useState<type.LocationType>();
    
    const location = useGeoLocation();
    let latitude: number | undefined
    let longitude: number | undefined

    const weatherAPI = async () => {
        if(location !== undefined){
            try {
                await axios.get(`/api/v1/weather?latitude=${latitude}&longitude=${longitude}`,
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }
            ).then((response) => {
                const data = response.data.data;
                console.log("[WeatherInfo] locationAPI: ", data)
                setTemp(data)
                setSkyName(weatherSky(data.sky))
            });
            } catch {
                console.log("api 불러오기 실패")
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
                console.log("[WeatherInfo] locationAPI: ", data)
                setLocationName(data)
            });
            } catch {
                console.log("[WeatherInfo] locationAPI: api 불러오기 실패")
            };
        }
    }

    useEffect(() => {
        if (location !== undefined) {
            latitude = location.coordinates?.lat;
            longitude = location.coordinates?.lng;
            console.log("[GeoLocation] latitude: " , latitude)
            console.log("[GeoLocation] longitude: " , longitude)

            weatherAPI()
            locationAPI()
        }
    }, [location])

    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box style={{color: '#585858'}} sx={{position: 'absolute', ml: '25pt', mt: '-150pt'}}>
            <Typography
                fontSize='27pt'
                fontFamily='CookieRun-Regular'
                sx={{ml: '13pt'}}
            >
                {locationName?.fullAddress}
            </Typography>
            <Typography
                fontSize='110px'
                fontFamily='Inter'
                fontWeight='500'
                sx={{ml: '40pt', mt: '15pt'}}
            >
                {temp?.temperature}
            </Typography>
            <Typography
                fontSize='40pt'
                fontWeight='700'
                sx={{ml: '210pt', mt: '-130pt'}}
            >
                {Temperature()}
            </Typography>
            <Typography
                fontSize='30pt'
                fontWeight='700'
                sx={{ml: '225pt', mt: '-45pt'}}
            >
                C
            </Typography>
            <Typography
                fontFamily='CookieRun-Regular'
                fontSize='25pt'
                fontWeight='500'
                sx={{ml: '80pt', mt: '60pt', color: '#585858'}}
            >
                {skyName}
            </Typography>
        </Box>
    )
}