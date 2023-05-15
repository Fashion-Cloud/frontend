import {
    CssBaseline, 
    Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FirstIntro from '../components/Firstpage/FirstIntro';
import FirstLogo from '../components/Firstpage/FirstLogo';
import StartButton from '../components/Firstpage/StartButton';
import WeatherBox from '../components/Firstpage/WeatherBox';
import '../fonts/font.css';
    
const theme = createTheme({
    palette: {
      background: {
        default: "# v",
      }
    },
});

export default function Firstpage(){
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                style={{
                    width: '100wh',
                    maxWidth: "1920px",
                    height: '100vh',
                    background: 'linear-gradient(252.44deg, #A8C8ED 0%, #7673DC 100%)'
                }}
            >
                <FirstLogo/>
                <FirstIntro/>
                
                <StartButton/>
                <WeatherBox/>
            </Container>
        </ThemeProvider>
    )
}