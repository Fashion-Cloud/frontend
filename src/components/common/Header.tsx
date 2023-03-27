import { 
    Container, 
    CssBaseline,
    Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserIcon from '../Header/UserIcon';
import WebLogo from '../Header/WebLogo';

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
                    <UserIcon/>
                </Box>
            </Container>
        </ThemeProvider>
    )
}