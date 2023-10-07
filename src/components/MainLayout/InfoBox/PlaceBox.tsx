import PlaceIcon from '@mui/icons-material/Place';
import { Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFindAllLocations } from 'src/api/hook/LocationHook';
import { LocationType } from 'src/utils/types';

export default function PlaceBox() {
  const [location, setLocation] = useState<LocationType>();
  const { data: locationData } = useFindAllLocations();
  useEffect(() => {
    if (locationData?.data) {
      setLocation(locationData?.data?.data);
    }
  }, [locationData]);

  return (
    <Toolbar sx={{ justifyContent: 'center', mt: 10 }}>
      <PlaceIcon sx={{ mr: 0.7 }} />
      <Typography sx={{ fontSize: '16pt' }}>{location?.fullAddress}</Typography>
    </Toolbar>
  );
}
