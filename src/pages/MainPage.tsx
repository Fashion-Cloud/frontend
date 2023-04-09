import {
    CssBaseline, 
    Container, 
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from '../components/common/Header';
import SmallWeather from '../components/Mainpage/SmallWeather';
import AllFashion from '../components/Mainpage/AllFashion';
import PaginationCom from '../components/Mainpage/PaginationCom';
import MainDrawer from '../components/Drawer/MainDrawer';

const theme = createTheme({
    palette: {
        background: {
            default: "# v",
        }
    },
});

export default function MainPage(){
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                style={{
                    width: '100vw',
                    maxWidth: "2560px",
                    minHeight: '100vh',
                    background: 'linear-gradient(252.44deg, #A8C8ED 0%, #7673DC 100%)'
                }}
            >
                <MainDrawer/>
                <Header/>
                <AllFashion/>
                <PaginationCom/>
            </Container>
            <SmallWeather/>
        </ThemeProvider>
    )
}