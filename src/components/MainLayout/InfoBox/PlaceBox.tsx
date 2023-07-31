import {
    Toolbar,
    Typography
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { locationDataState } from "../../../utils/Recoil";

import PlaceIcon from '@mui/icons-material/Place';

export default function PlaceBox() {
    const locationData = useRecoilValue(locationDataState);
    
    return (
        <Toolbar sx={{justifyContent: 'center', mt: 10}}>
            <PlaceIcon sx={{mr: 0.7}}/>
            <Typography sx={{fontSize: '16pt'}}>
                {locationData?.fullAddress}
            </Typography>
        </Toolbar>
    )
}