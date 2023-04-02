import {
    Typography
} from '@mui/material';

export default function Logo(){
    return(
        <Typography 
            fontFamily='BalooBhaijaan'
            fontStyle='normal'
            fontWeight='bold'
            fontSize='130px'
            style={{
                position: 'absolute',
                left: '200px',
                top: '320px',
                color: "#FFFFFF"
            }}
        >
            Fashion Cloud
        </Typography>
    )
}