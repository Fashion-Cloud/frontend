import {
    Button
} from '@mui/material';

export default function StartButton(){
    return (
        <Button 
            variant="contained" 
            style={{
                fontFamily: 'CookieRun-Regular', 
                fontSize:'17pt', 
                fontWeight: 'bold',
                width: "400px", 
                height: '43px', 
                borderRadius: '30px', 
                boxShadow: "#807ce6 0px 5px 5px 3px"
            }}
            sx={{
                mt: '500px',
                ml: '230px',
                color: '#7673DC',
                backgroundColor:'#FFFFFF',
                "&:hover": {backgroundColor: "#b0afdd"}
            }}
            href="/main"
        >
            시작하기
        </Button>
    )
}