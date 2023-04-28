import {
    Typography
} from '@mui/material';

export default function Logo(){
    return(
        <Typography 
            fontFamily='CookieRun-Regular'
            fontStyle='normal'
            fontWeight='bold'
            fontSize='55pt'
            style={{
                position: 'absolute',
                left: '200px',
                top: '250px',
                color: "#FFFFFF"
            }}
        >
            Fashion Cloud
        </Typography>
    )
}