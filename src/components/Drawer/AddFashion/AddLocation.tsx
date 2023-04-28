import { useEffect, useState } from 'react';
import axios from 'axios'
import { type } from '../../../utils/types';

import { IconButton, Toolbar, Typography } from "@mui/material";
import NearMeIcon from '@mui/icons-material/NearMe';
import '../../../fonts/font.css'

type LocationProps = {
    getLocationData: Function;
}

export default function AddLocation({getLocationData}: LocationProps) {
    const [location, setLocation] = useState<type.LocationType>();

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
            getLocationData(data)
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    useEffect(() => {
        locationAPI()
    }, [])

    return(
        <Toolbar>
            <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                Location: 
            </Typography>
            <IconButton style={{backgroundColor: '#f1f1f1'}} sx={{ml: 1}}>
                <NearMeIcon/>
            </IconButton>
            <Typography sx={{ml: 1}}>
                {location?.fullAddress}
            </Typography>
        </Toolbar>
    )
}