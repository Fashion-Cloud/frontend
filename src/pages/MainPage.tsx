import {
    CssBaseline, 
    Container, 
    // Grid,
    // Paper
} from '@mui/material';
// import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from '../components/common/Header';
import SmallWeather from '../components/Mainpage/SmallWeather';
import AllFashion from '../components/Mainpage/AllFashion';
import MainDrawer from '../components/Drawer/MainDrawer';
// import SearchBar from '../components/Firstpage/SearchBar';
// import WeatherSelect from '../components/Mainpage/GridRight/WeatherSelect';
// import WeatherSlider from '../components/Mainpage/GridRight/WeatherSlider';

const theme = createTheme({
    palette: {
        background: {
            default: "# v",
        }
    },
});

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

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
                {/* <Grid  container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=6</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <SearchBar/>
                        <WeatherSelect/>
                        <WeatherSlider/>
                        <AllFashion/>
                    </Grid>
                </Grid> */}
                <MainDrawer/>
                <Header/>
                <AllFashion/>
            </Container>
            <SmallWeather/>
        </ThemeProvider>
    )
}
