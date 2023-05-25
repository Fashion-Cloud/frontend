import {
    CssBaseline, 
    Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AllFashion from '../components/Mainpage/AllFashion';
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
                <AllFashion/>
            </Container>
        </ThemeProvider>
    )
}
