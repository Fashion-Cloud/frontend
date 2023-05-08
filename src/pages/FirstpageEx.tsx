import {
    CssBaseline, 
    Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FirstInfo from '../components/FirstpageEx/FirstInfo';
import Logo from '../components/FirstpageEx/Logo';
import StartButton from '../components/FirstpageEx/StartButton';
import Weather from '../components/FirstpageEx/Weather';
// import WeatherLottie from '../components/FirstpageEx/WeatherLottie';
// import WeatherImage from '../components/FirstpageEx/WeatherImage';
// import WeatherInfo from '../components/FirstpageEx/WeatherInfo';
import '../fonts/font.css';

const theme = createTheme({
    palette: {
      background: {
        default: "# v",
      }
    },
});

export default function FirstpageEx(){
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
                <Logo/>
                <FirstInfo/>
                {/* <WeatherLottie/> */}
                {/* <WeatherImage/> */}
                <StartButton/>
                <Weather/>
            </Container>
        </ThemeProvider>
    )
}