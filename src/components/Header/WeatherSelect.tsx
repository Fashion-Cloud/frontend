// import { useState } from 'react';
import {
    Box, 
    IconButton,
} from '@mui/material';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export default function WeatherSelect() {
    // const [sunnyState, setSunnyState] = useState(false);

    return(
        <Box textAlign="center" sx={{background: '#FFFFFF', width: 300, borderRadius: '30px', ml: 75, mb: -5.5}}>
            <IconButton sx={{ml: 3, mt: 0.5, mb: 0.5}}>
                <WbSunnyIcon/>
            </IconButton>
            <IconButton sx={{ml: 3}}>
                <UmbrellaIcon/>
            </IconButton>
            <IconButton sx={{ml: 3}}>
                <CloudIcon/>
            </IconButton>
            <IconButton sx={{ml: 3, mr: 3}}>
                <AcUnitIcon/>
            </IconButton>
        </Box>
    )
}
// 날씨 선택 / 슬라이더 왼쪽으로 이동, 
// 한줄로 정리
// <Box textAlign="center" sx={{background: '#FFFFFF', width: '300px', borderRadius: '30px', ml: 30, mb: -20}}>