import '../../../../public/fonts/font.css';

import NearMeIcon from '@mui/icons-material/NearMe';
import { IconButton, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import useGeoLocation from '../../../assets/hooks/useGeoLocation';
import { LocationType } from '../../../utils/types';

type LocationProps = {
  getLocationData: (data: any) => void;
};

export default function AddLocation({ getLocationData }: LocationProps) {
  const [location, setLocation] = useState<LocationType>();
  const locationData = useGeoLocation();
  let latitude: number | undefined;
  let longitude: number | undefined;

  const locationAPI = async () => {
    if (locationData !== undefined) {
      try {
        await axios
          .get(`/api/v1/address?latitude=${latitude}&longitude=${longitude}`, {
            headers: {
              Accept: 'application/json',
            },
          })
          .then((response) => {
            console.log('response: ', response);
            const data = response.data.data;
            console.log('[WeatherTemp] locationAPI: ', data);
            getLocationData(data);
            setLocation(data);
          });
      } catch {
        console.log('[AddLocation] locationAPI: api 불러오기 실패');
      }
    }
  };

  useEffect(() => {
    if (locationData !== undefined) {
      latitude = locationData.coordinates?.lat;
      longitude = locationData.coordinates?.lng;
      console.log('[GeoLocation] latitude: ', latitude);
      console.log('[GeoLocation] longitude: ', longitude);

      locationAPI();
    }
  }, [locationData]);

  return (
    <Toolbar>
      <Typography fontFamily="BalooBhaijaan" fontWeight="700" fontSize="16pt">
        Location:
      </Typography>
      <IconButton style={{ backgroundColor: '#f1f1f1' }} sx={{ ml: 1 }}>
        <NearMeIcon />
      </IconButton>
      <Typography sx={{ ml: 1 }}>{location?.fullAddress}</Typography>
    </Toolbar>
  );
}
