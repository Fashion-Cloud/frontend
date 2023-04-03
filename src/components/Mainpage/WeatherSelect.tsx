import { useState } from 'react';
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
        <Box textAlign="center" sx={{background: '#FFFFFF', width: '565px', borderRadius: '30px', ml: 62, mb: -11}}>
            <IconButton sx={{ml: 8, mt: 1, mb: 1}}>
                <WbSunnyIcon/>
            </IconButton>
            <IconButton sx={{ml: 8}}>
                <UmbrellaIcon/>
            </IconButton>
            <IconButton sx={{ml: 8}}>
                <CloudIcon/>
            </IconButton>
            <IconButton sx={{ml: 8, mr: 8}}>
                <AcUnitIcon/>
            </IconButton>
        </Box>
    )
}
// 날씨 선택 / 슬라이더 왼쪽으로 이동, 
// 한줄로 정리
        // <Box textAlign="center" sx={{background: '#FFFFFF', width: '300px', borderRadius: '30px', ml: 30, mb: -20}}>