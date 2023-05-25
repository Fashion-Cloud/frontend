import { useEffect, useState } from 'react';
import axios from 'axios'
import { type } from '../../../utils/types';
import useGeoLocation from "../../../assets/hooks/useGeoLocation";

import { IconButton, Toolbar, Typography } from "@mui/material";
import NearMeIcon from '@mui/icons-material/NearMe';
import '../../../fonts/font.css'

type LocationProps = {
    getLocationData: Function;
}

export default function AddLocation({getLocationData}: LocationProps) {
    const [location, setLocation] = useState<type.LocationType>();
    const locationData = useGeoLocation();
    let latitude: number | undefined;
    let longitude: number | undefined;

    const locationAPI = async () => {
        if(locationData !== undefined){
            try {
                await axios.get(`/api/v1/address?latitude=${latitude}&longitude=${longitude}`,
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }
            ).then((response) => {
                console.log("response: ", response)
                const data = response.data.data;
                console.log("[WeatherTemp] locationAPI: ", data)
                getLocationData(data)
                setLocation(data)
            });
            } catch {
                console.log("[AddLocation] locationAPI: api 불러오기 실패")
            };
        }
    }

    useEffect(() => {
        if (locationData !== undefined) {
            // latitude = locationData.coordinates?.lat;
            // longitude = locationData.coordinates?.lng;
            latitude = 37.385673;
            longitude = 126.637527;
            console.log("[GeoLocation] latitude: " , latitude)
            console.log("[GeoLocation] longitude: " , longitude)

            locationAPI()
        }
    }, [locationData])

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