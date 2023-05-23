import {
    Toolbar,
    Typography
} from "@mui/material";
import { type } from '../../utils/types';

import PlaceIcon from '@mui/icons-material/Place';

type LocationProps = {
    locationData: type.LocationType | undefined;
}

export default function PlaceBox({locationData}: LocationProps) {
    return (
        <Toolbar sx={{justifyContent: 'center', mt: 10}}>
            <PlaceIcon sx={{mr: 0.7}}/>
            <Typography sx={{fontSize: '16pt'}}>
                {locationData?.fullAddress}
            </Typography>
        </Toolbar>
    )
}