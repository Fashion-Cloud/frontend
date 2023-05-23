import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import {
    CssBaseline,
    Box,
    Drawer,
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Button,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CloudIcon from '@mui/icons-material/Cloud';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
    const [view, setView] = React.useState('list');
    const [iconColor, setIconColor] = React.useState('#757575');
    const [backColor, setBackColor] = React.useState('#FFFFFF');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);

    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MiniDrawer variant="permanent">
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <Box sx={{px: 1.5, my: 1.5}}>
                        <img
                            height="50px"
                            // style={{position:"absolute"}}
                            src={logo}
                        />
                    </Box>
                </ListItem>
                <Divider/>
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton sx={{ minHeight: 48, px: 2.5, backgroundColor: '#EDF7FC' }}>
                            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                <HomeIcon color="primary" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
                            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                <CloudIcon />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
                            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                <AddCircleIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
            </MiniDrawer>
        </Box>
    )
}

                
                {/* <ToggleButtonGroup
                    orientation="vertical"
                    value={view}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="list" aria-label="list">
                        <HomeIcon/>
                    </ToggleButton>
                    <ToggleButton value="module" aria-label="module">
                        <CloudIcon />
                    </ToggleButton>
                    <ToggleButton value="quilt" aria-label="quilt">
                        <AddCircleIcon />
                    </ToggleButton>
                </ToggleButtonGroup> */}