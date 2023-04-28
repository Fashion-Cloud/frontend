import { 
    Container, 
    CssBaseline,
    Box,
} from '@mui/material';
import React, {useState} from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import UserIcon from '../Header/UserIcon';
import WebLogo from '../Header/WebLogo';
import SearchBar from '../Mainpage/GridRight/SearchBar';
import WeatherSelect from '../Mainpage/GridRight/WeatherSelect';
import WeatherSlider from '../Mainpage/GridRight/WeatherSlider';

const theme = createTheme({
    palette: {
      primary: {
        main: "# v",
      },
    },
});

export default function Header(){
    const [searchTemp, setSearchTemp] = useState<number>(26);
    
    function getTempData(data: number) {
        setSearchTemp(data)
        console.log("[WeatherSlider -> Header] searchTemp: ", data)
    }

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                style={{
                    width: "100%",
                    maxWidth: "1920px",
                }}
            >
                <Box
                    position='absolute'
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    marginLeft="auto"
                    sx={{ height: "70px" }}
                >
                    <WebLogo/>
                    {/* <UserIcon/> */}
                    {/* <WeatherSelect searchTemp = {searchTemp}/>
                    <WeatherSlider getTempData = {getTempData}/>
                    <SearchBar/> */}
                </Box>
            </Container>
        </ThemeProvider>
    )
}