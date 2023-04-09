import {
    Typography
} from '@mui/material';

export default function Logo(){
    return(
        <Typography 
            fontFamily='BalooBhaijaan'
            fontStyle='normal'
            fontWeight='bold'
            fontSize='60pt'
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