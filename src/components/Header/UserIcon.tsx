import { 
    Link,
    Box,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../fonts/font.css';

export default function UserIcon(){
    return(
        <Box sx={{ mb: '-100px', mr: '120px' }}>
            <Link
                fontFamily= 'BalooBhaijaan'
                sx={{ 
                    color: "#FFFFFF",
                    "&:hover": {
                    color: "#7673DC"
                    },
                    fontWeight: "bold", fontSize: "33px"
                }}
                align="right"
                variant="h5"
                href="/"
                underline="none"
            >
                    <AccountCircleIcon fontSize='large' sx={{mb: -0.5,mr: 1}}/>
                    User
            </Link>
        </Box>
    )
}