import {
    Typography
} from '@mui/material';

export default function FirstInfo(){
    return(
        <Typography 
            fontFamily='Dongle-Bold'
            fontStyle='normal'
            fontWeight='bold'
            fontSize='41pt'
            style={{
                position: 'absolute',
                left: '200px',
                top: '340px',
                color: "#FFFFFF"
            }}
        >
            요즘 날씨, 어떤 옷을 입을지 고민된다면?
        </Typography>
    )
}