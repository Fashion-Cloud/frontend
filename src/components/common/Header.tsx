import { 
    Container, 
    CssBaseline,
    Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchBar from '../Mainpage/GridRight/SearchBar';
// import UserIcon from '../Header/UserIcon';
import WebLogo from '../Header/WebLogo';
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
                    <WeatherSelect/>
                    <WeatherSlider/>
                    <SearchBar/>
                </Box>
            </Container>
        </ThemeProvider>
    )
}