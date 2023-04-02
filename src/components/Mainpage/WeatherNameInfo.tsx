import { 
    Box,
    Divider,
    Typography,
} from "@mui/material";

export default function WeatherNameInfo(){
    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', mt: '360px', ml: '200px'}}>
            <Divider style={{width: '100px'}}/>
            <Typography fontSize='25px' >
                11
            </Typography>
            <Divider/>
            <Typography fontSize='25px' >
                22
            </Typography>
            <Divider/>
            <Typography fontSize='25px'>
                33
            </Typography>
            <Divider/>
            <Typography fontSize='25px'>
                44
            </Typography>
            <Divider/>
        </Box>
    )
}