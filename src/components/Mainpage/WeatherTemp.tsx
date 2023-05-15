import {
    Box,
    Typography
} from '@mui/material';
import { type } from '../../utils/types';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

type TempProps = {
    weather: type.WeatherType | undefined;
    skyName: string | undefined;
    locationData: type.LocationType | undefined;
}

export default function WeatherTemp({weather, skyName, locationData}: TempProps){
    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', ml: '10px', mt: '50px'}}>
            <PlaceOutlinedIcon fontSize="large" sx={{position: 'absolute', ml: '25px', mt: '0px'}}/>
            <Typography
                fontSize='25px'
                fontFamily='CookieRun-Regular'
                fontWeight='500'
                sx={{ml: '60px'}}
            >
                {locationData?.fullAddress}
            </Typography>
            <Box>
                <Typography
                    fontSize='100px'
                    fontFamily='Inter'
                    fontWeight='300'
                    style={{textAlign: 'center'}}
                    sx={{ml: '20px', mt: '40px'}}
                >
                    {weather?.temperature}
                </Typography>
                <Typography
                    fontSize='35px'
                    fontWeight='500'
                    sx={{ml: '240px', mt: '-150px'}}
                >
                    {Temperature()}
                    C
                </Typography>
            </Box>
            <Typography
                fontFamily='CookieRun-Regular'
                fontSize='26px'
                fontWeight='500'
                style={{textAlign: 'center', marginTop: 80, marginLeft: 25}}
            >
                {skyName}
            </Typography>
        </Box>
    )
}