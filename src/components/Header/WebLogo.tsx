import { 
    Typography,
    Link
} from '@mui/material';
import '../../fonts/font.css';

export default function WebLogo(){
    return(
        <Link href="/">
            <Typography 
                fontFamily='BalooBhaijaan'
                fontStyle='normal'
                fontWeight='bold'
                fontSize='40px'
                lineHeight='72px'
                style={{
                    position: 'absolute',
                    width: '307px',
                    left: '150px',
                    top: '100px',
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
    )
}