import { useEffect, useState } from 'react';
import axios from 'axios'
import { type } from '../../../utils/types';

import { 
    Toolbar, 
    Typography,
    Paper,
    InputBase
} from "@mui/material";
import '../../../fonts/font.css'

type WeatherProps = {
    getWeatherData: Function;
}

export default function AddWeatherInfo({getWeatherData}: WeatherProps) {
    const [weather, setWeather] = useState<type.WeatherType>();

    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    const weatherAPI = async () => {
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
            getWeatherData(data)
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    useEffect(() => {
        weatherAPI()
    }, [])

    return(
        <div>
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
                        sx={{ ml: 1, flex: 1 }}
                        value={weather?.temperature}
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Typography color="#989898" sx={{mr: 1}}>
                        {Temperature()}
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
                        sx={{ ml: 1, flex: 1 }}
                        value={weather?.windSpeed}
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Typography color="#989898" sx={{mr: 1}}>
                        m/s
                    </Typography>
                </Paper>
            </Toolbar>
        </div>
    )
}