import { 
    Box,
    Divider,
    Typography,
} from "@mui/material";

export default function WeatherNameInfo(){
    return(
        <Box sx={{color: '#FFFFFF', position: 'absolute', mt: '340px', ml: '170px'}}>
            <Divider style={{width: '100px'}}/>
            <Typography fontSize='23px' >
                11
            </Typography>
            <Divider/>
            <Typography fontSize='23px' >
                22
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                33
            </Typography>
            <Divider/>
            <Typography fontSize='23px'>
                44
            </Typography>
            <Divider/>
        </Box>
    )
}