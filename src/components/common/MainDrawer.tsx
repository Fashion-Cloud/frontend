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
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import logo from '../../assets/images/bang.png';
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

  const Menus = [
    { title: 'Home', src: '/', icon: <HomeIcon /> },
    { title: 'MyPage', src: '/mypage', icon: <PersonIcon /> },
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
        <ListItem disablePadding sx={{ display: 'block' }}>
          <Box sx={{ px: 1.5, my: 1.5 }}>
            <Image height={50} src={logo} alt="logo" />
          </Box>
        </ListItem>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            {Menus.map((menu, index) => (
              <ListItemButton
                key={index}
                href={menu.src}
                style={{
                  backgroundColor: pathname === menu.src ? '#EDF7FC' : '',
                }}
                sx={{ minHeight: 48, px: 2.5 }}
              >
                <ListItemIcon
                  style={{ color: pathname === menu.src ? '#4B9BBF' : '' }}
                  sx={{ minWidth: 0, justifyContent: 'center' }}
                >
                  {menu.icon}
                </ListItemIcon>
              </ListItemButton>
            ))}
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{ minHeight: 48, px: 2.5 }}
              onClick={handleAvatarClick}
            >
              <ListItemIcon sx={{ minWidth: 0, justifyContent: 'flex-end' }}>
                <Avatar
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
