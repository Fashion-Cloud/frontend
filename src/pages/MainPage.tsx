import {
    CssBaseline, 
    Container, 
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from '../components/common/Header';
// import SmallWeather from '../components/Mainpage/SmallWeather';
import AllFashion from '../components/Mainpage/AllFashion';

const theme = createTheme({
    palette: {
      primary: {
        main: "# v",
      },
    },
});

export default function MainPage(){
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
                <Header/>
                {/* <SmallWeather/> */}
                <AllFashion/>
            </Container>
        </ThemeProvider>
    )
}