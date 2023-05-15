import { 
    Box,
    Divider,
    Typography,
} from "@mui/material";

export default function WeatherName(){
    return(
        <Box textAlign='right' sx={{position: 'absolute', color: '#FFFFFF', mt: '340px', ml: '60px'}}>
            <Divider/>
            <Typography fontSize='23px'>
                습도
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                풍속
            </Typography>
            <Divider style={{width: '100px'}}/>
            <Typography fontSize='23px'>
                강수량
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                강수형태
            </Typography>
            <Divider/>
        </Box>
    )
}