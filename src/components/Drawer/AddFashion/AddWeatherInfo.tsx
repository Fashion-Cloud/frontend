import { 
    Toolbar, 
    Typography,
    Paper,
    InputBase
} from "@mui/material";
import '../../../fonts/font.css'

export default function AddWeatherInfo() {
    function Temperature(): JSX.Element {
        return <span>&deg;</span>;
    }

    return(
        <div>
            <Toolbar sx={{mt: -1}}>
                <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                    Temperature: 
                </Typography>
                <Paper
                    component="form"
                    sx={{ ml: 2, p: '2px 4px', display: 'flex', alignItems: 'center', width: 120 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="26.5"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Typography color="#989898" sx={{mr: 1}}>
                        {Temperature()}
                    </Typography>
                </Paper>
            </Toolbar>
            <Toolbar sx={{mt: -1}}>
                <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                    Wind Speed: 
                </Typography>
                <Paper
                    component="form"
                    sx={{ ml: 2, p: '2px 4px', display: 'flex', alignItems: 'center', width: 120 }}
                >
                    <InputBase
                        // disabled
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="11"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Typography color="#989898" sx={{mr: 1}}>
                        km/h
                    </Typography>
                </Paper>
            </Toolbar>
        </div>
    )
}