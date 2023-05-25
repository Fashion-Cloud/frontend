import { useEffect, useState } from 'react';
import axios from 'axios'
import { type } from '../../../utils/types';
import useGeoLocation from "../../../assets/hooks/useGeoLocation";

import { 
    Toolbar, 
    Typography,
    Paper,
    InputBase,
    Box
} from "@mui/material";
import '../../../fonts/font.css'
import weatherSky from '../../../assets/data/weatherSky';

type WeatherProps = {
    getWeatherData: Function;
}

export default function AddWeatherInfo({getWeatherData}: WeatherProps) {
    const [weather, setWeather] = useState<type.WeatherType>();
    
    const location = useGeoLocation();
    let latitude: number | undefined;
    let longitude: number | undefined;
    
    const weatherAPI = async () => {
        if(latitude !== undefined){
            try {
                await axios.get(`/api/v1/weather?latitude=${latitude}&longitude=${longitude}`,
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }
            ).then((response) => {
                const data = response.data.data;
                console.log(data)
                setWeather(data)
                getWeatherData(data)
            });
            } catch {
                console.log("api 불러오기 실패")
            };
        }
    }

    useEffect(() => {
        if (location !== undefined) {
            latitude = location.coordinates?.lat;
            longitude = location.coordinates?.lng;

            latitude = 37.385673;
            longitude = 126.637527;

            console.log("[GeoLocation] latitude: " , latitude)
            console.log("[GeoLocation] longitude: " , longitude)

            weatherAPI()
        }
    }, [location])

    return(
        <Box>
            <Toolbar sx={{mt: -1}}>
                <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                    Sky Status: 
                </Typography>
                <Paper
                    component="form"
                    sx={{ ml: 2, p: '2px 4px', display: 'flex', alignItems: 'center', width: 120 }}
                >
                    <InputBase
                        disabled
                        sx={{ mt: 0.3, ml: 1, flex: 1 }}
                        value={weatherSky(weather?.sky) || ""}
                    />
                </Paper>
            </Toolbar>
            <Toolbar sx={{mt: -1}}>
                <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                    Temperature: 
                </Typography>
                <Paper
                    component="form"
                    sx={{ ml: 2, p: '2px 4px', display: 'flex', alignItems: 'center', width: 120 }}
                >
                    <InputBase
                        disabled
                        sx={{ mt: 0.3, ml: 1, flex: 1}}
                        value={weather?.temperature || ""}
                    />
                    <Typography color="#989898" sx={{mr: 1, mt: 0.5}}>
                        °C
                    </Typography>
                </Paper>
            </Toolbar>
            <Toolbar sx={{mt: -1}}>
                <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                    Wind Speed: 
                </Typography>
                <Paper
                    component="form"
                    sx={{ ml: 2, p: '2px 4px', display: 'flex', alignItems: 'center', width: 120 }}
                >
                    <InputBase
                        disabled
                        sx={{ mt: 0.3, ml: 1, flex: 1 }}
                        value={weather?.windSpeed || 0}
                    />
                    <Typography color="#989898" sx={{mr: 1}}>
                        m/s
                    </Typography>
                </Paper>
            </Toolbar>
        </Box>
    )
}