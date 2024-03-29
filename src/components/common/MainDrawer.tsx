import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import StoryModal from '../Story/Story';
import AvatarModal from './AvatarModal';

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

const MiniDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}));

export default function MainDrawer() {
  const { pathname } = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setStoryOpen(true);
  };
  const handleClose = () => {
    setStoryOpen(false);
  };

  if (pathname === '/login' || pathname === '/register') {
    return null;
  }

  const Menus = [
    { title: 'Home', src: '/', icon: <HomeIcon style={{ fontSize: 30 }} /> },
    {
      title: 'MyPage',
      src: '/mypage',
      icon: <PersonIcon style={{ fontSize: 30 }} />,
    },
    {
      title: '',
      src: '',
      icon: <HistoryIcon style={{ fontSize: 30 }} onClick={handleClickOpen} />,
    },
  ];

  const handleAvatarClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MiniDrawer variant="permanent">
        <List sx={{ marginTop: '50px' }}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            {Menus.map((menu, index) => (
              <ListItemButton
                key={index}
                href={menu.src}
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '9px',
                  padding: '11px',
                  borderRadius: '10px',
                  backgroundColor: pathname === menu.src ? '#EDF7FC' : '',
                }}
              >
                <ListItemIcon
                  style={{ color: pathname === menu.src ? '#71B4DC' : '' }}
                  sx={{ minWidth: 0, justifyContent: 'center' }}
                >
                  {menu.icon}
                </ListItemIcon>
              </ListItemButton>
            ))}
          </ListItem>
        </List>

        <StoryModal storyOpen={storyOpen} handleClose={handleClose} />

        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{ minHeight: 48, px: 2.5 }}
              onClick={handleAvatarClick}
            >
              <ListItemIcon sx={{ minWidth: 0, justifyContent: 'flex-end' }}>
                <Avatar
                  style={{ top: '450px' }}
                  src={'https://avatars.githubusercontent.com/u/83361012?v=4'}
                  alt="User's avatar"
                  sx={{ width: 32, height: 32, ml: -0.5 }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </MiniDrawer>
      <AvatarModal open={modalOpen} onClose={handleCloseModal} />
    </Box>
  );
}
