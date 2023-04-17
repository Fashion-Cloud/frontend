import { 
    Toolbar,
    Typography,
    Paper,
    InputBase
} from "@mui/material";
import '../../../fonts/font.css'

export default function AddTitle() {
    return (
        <Toolbar>
            <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                Title: 
            </Typography>
            <Paper
                component="form"
                sx={{ ml: 1, p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Write Down Your Fashion Title"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
      </Toolbar>
    )
}