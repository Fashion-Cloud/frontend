import * as React from "react";
import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAddFashion from "./ListAddFashion";

type Anchor = "left";

export interface IProps{
    openAdd: boolean; 
    handleOpenAdd: void; 
    handleCloseAdd: void;
}

export default function MainDrawer(){
    const [state, setState] = React.useState({ left: false });
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd =  () => setOpenAdd(false);

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
      ) => {
        if (
          event &&
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor: Anchor) => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          color="#A8C8ED"
        >
          <Divider sx={{mt: '110px'}}/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton href="/main">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            Search
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListAddFashion/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            User
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );


    return (
        <div>
            <React.Fragment key={'left'}>
                <IconButton onClick={toggleDrawer('left', true)} style={{position: 'absolute'}} sx={{mt: '10px'}}>
                    <MenuIcon style={{color: '#FFFFFF'}}/>
                </IconButton>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}