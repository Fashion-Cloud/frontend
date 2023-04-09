import {
    Button
} from '@mui/material';

export default function StartButton(){
    return (
        <Button 
            variant="contained" 
            style={{
                fontFamily: 'Dongle-Bold', 
                fontSize:'25pt', 
                color: '#7673DC',
                width: "400px", 
                height: '43px', 
                borderRadius: '30px', 
                backgroundColor:'#FFFFFF',
                boxShadow: "#807ce6 0px 5px 5px 3px"
            }}
            sx={{
                mt: '500px',
                ml: '230px'
            }}
            href="/main"
        >
            시작하기
        </Button>
    )
}