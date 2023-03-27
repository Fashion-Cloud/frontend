import {
    CssBaseline, 
    Container, 
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from '../components/common/Header';

import '../fonts/font.css';

const theme = createTheme({
    palette: {
      primary: {
        main: "# v",
      },
    },
});

export default function FirstPage(){
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
            </Container>
        </ThemeProvider>
    )
}