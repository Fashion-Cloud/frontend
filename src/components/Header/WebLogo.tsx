import { 
    Typography,
    Link
} from '@mui/material';
import '../../fonts/font.css';
import {
    Button
} from '@mui/material';
// import logo from "../../assets/images/logo/Logo_Blue.png";
import logo from "../../assets/images/logo/Logo_Cloud.png";

export default function WebLogo(){
    return(
        <Link href="/first">
            <Typography 
                fontFamily='BalooBhaijaan'
                fontStyle='normal'
                fontWeight='bold'
                fontSize='35px'
                // lineHeight='72px'
                style={{
                    position: 'absolute',
                    width: '307px',
                    left: '150px',
                    top: '63px',
                }}
                sx={{
                    color: "#FFFFFF",
                    "&:hover": {
                    color: "#7673DC"
                    },
                }}
            >
                Fashion Cloud
            </Typography>
        </Link>
        // <Button href="/first" style={{position: "absolute"}} sx={{ml: 16, mb: -6}}>
        //     <img
        //         height="40px"
        //         src={logo}
        //     />
        // </Button>
    )
}