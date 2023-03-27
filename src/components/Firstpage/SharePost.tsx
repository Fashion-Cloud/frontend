import {
    Typography
} from '@mui/material';

export default function SharePost(){
    return(
        <Typography
            fontFamily='BalooBhaijaan'
            fontStyle='normal'
            fontWeight='bold'
            fontSize='60px'
            lineHeight='72px'
            style={{
                position: 'absolute',
                justifyContent: 'right',
                right: '250px',
                top: '250px',
                color: '#FFFFFF'
            }}
        >
            Share Your Daily Look!
        </Typography>
    )
}