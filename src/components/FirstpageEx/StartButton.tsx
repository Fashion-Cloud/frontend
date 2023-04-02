import {
    Button
} from '@mui/material';

export default function StartButton(){
    return (
        <Button 
            variant="contained" 
            style={{
                fontFamily: 'Dongle-Bold', 
                fontSize:'40px', 
                color: '#7673DC',
                width: "500px", 
                height: '50px', 
                borderRadius: '30px', 
                backgroundColor:'#FFFFFF',
                boxShadow: "#807ce6 0px 5px 5px 3px"
            }}
            sx={{
                mt: '650px',
                ml: '340px'
            }}
            href="/main"
        >
            시작하기
        </Button>
    )
}