import { styled, Theme, CSSObject } from '@mui/material/styles';
import { useRecoilState } from "recoil";
import { menuState } from "../../Recoil";

import {
    CssBaseline,
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import CheckroomIcon from '@mui/icons-material/Checkroom';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

import logo from '../../assets/images/bang.png';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const MiniDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

export default function MainDrawer() {
    const [select, setSelect] = useRecoilState(menuState);
    console.log("select: ", select);

    const Menus = [
        {title: 'Home', src: '/', icon: <HomeIcon/>},
        {title: 'Lookbook', src: '/lookbook', icon: <CheckroomIcon/>}
    ]

    const handleClick = (menu: string) => {
        setSelect(menu);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MiniDrawer variant="permanent">
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <Box sx={{px: 1.5, my: 1.5}}>
                        <img
                            height="50px"
                            src={logo}
                        />
                    </Box>
                </ListItem>
                <Divider/>
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        {
                            Menus.map((menu, index) => (
                                <ListItemButton key={index} href={menu.src} style={{ backgroundColor: select === menu.title ? '#EDF7FC' : '' }} onClick={() => handleClick(menu.title)} sx={{ minHeight: 48, px: 2.5 }}>
                                    <ListItemIcon style={{color: select === menu.title ? '#4B9BBF' : ''}} sx={{ minWidth: 0, justifyContent: 'center' }}>
                                        {menu.icon}
                                    </ListItemIcon>
                                </ListItemButton>
                            ))
                        }
                    </ListItem>
                </List>
                <Divider/>
            </MiniDrawer>
        </Box>
    )
}