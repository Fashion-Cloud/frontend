import { IconButton, Toolbar, Typography } from "@mui/material";
import NearMeIcon from '@mui/icons-material/NearMe';
import '../../../fonts/font.css'

export default function AddLocation() {
    return(
        <Toolbar>
            <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                Location: 
            </Typography>
            <IconButton style={{backgroundColor: '#f1f1f1'}} sx={{ml: 1}}>
                <NearMeIcon/>
            </IconButton>
            <Typography sx={{ml: 1}}>
                경기도 성남시 분당구 삼평동
            </Typography>
        </Toolbar>
    )
}