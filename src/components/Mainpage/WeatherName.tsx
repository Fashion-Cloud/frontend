import { 
    Box,
    Divider,
    Typography,
} from "@mui/material";

export default function WeatherName(){
    // 강수량, 습도, 강수형태, 풍속, 하늘 상태, 기온 위치에 아이콘, cloudy 위치에 기온
    return(
        <Box textAlign='right' sx={{position: 'absolute', color: '#FFFFFF', mt: '360px', ml: '90px'}}>
            <Divider style={{width: '100px'}}/>
            <Typography fontSize='25px'>
                강수량
            </Typography>
            <Divider/>
            <Divider/>
            <Typography fontSize='25px'>
                습도
            </Typography>
            <Divider/>
            <Typography fontSize='25px'>
                강수형태
            </Typography>
            <Divider/>
            <Typography fontSize='25px'>
                풍속
            </Typography>
            <Divider/>
        </Box>
    )
}