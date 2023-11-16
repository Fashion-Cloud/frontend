import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon, Modal,
} from '@mui/material';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import router, { useRouter } from 'next/router';
import React, { useState } from 'react';

import AvatarModal from './AvatarModal';
import DisplayStory from "../Story/DisplayStory";

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
  const [showStory, setShowStory] = useState(false);

  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const handleOpenDetail = () => setOpenDetail(true);
  const handleCloseDetail = () => setOpenDetail(false);

  const handleListClick = (src: string | undefined) => {
    if (!src) {
      setShowStory(!showStory);
      handleOpenDetail();
    }
    if (src) {
      router.push(src);
    }
  }

  if (pathname === '/login' || pathname === '/register') {
    return null;
  }

  const Menus = [
    {
      title: 'Home',
      src: '/',
      icon: <HomeIcon style={{ fontSize: 30 }} />
    },
    {
      title: 'MyPage',
      src: '/mypage',
      icon: <PersonIcon style={{ fontSize: 30 }} />,
    },
    {
      title: 'Story',
      icon: <AutoStoriesIcon style={{ fontSize: 30 }}/>
    }
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
                onClick={() => handleListClick(menu.src)}
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
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{ minHeight: 48, px: 2.5 }}
              onClick={handleAvatarClick}
            >
              <ListItemIcon sx={{ minWidth: 0, justifyContent: 'flex-end' }}>
                <Avatar
                  style={{ top: '500px' }}
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
      <DisplayStory openDetail={openDetail} onClose={handleCloseDetail}/>
    </Box>
  );
}
