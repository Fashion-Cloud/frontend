import { 
    Container, 
    CssBaseline,
    Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchBar from '../Header/SearchBar';
import UserIcon from '../Header/UserIcon';
import WebLogo from '../Header/WebLogo';
import WeatherSelect from '../Mainpage/WeatherSelect';
import WeatherSlider from '../Mainpage/WeatherSlider';

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