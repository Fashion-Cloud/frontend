import * as React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Modal
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AddFashion from "./AddFashion";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 650,
    width: 900,
    bgcolor: "#FFF",
    borderRadius: "25px",
    boxShadow: 24,
    p: 4,
};

export default function ListAddFashion() {
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd =  () => setOpenAdd(false);

    return (
        <div>
            <ListItem disablePadding>
                <ListItemButton onClick={handleOpenAdd}>
                    <ListItemIcon>
                        <ControlPointIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Add Fashion
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <React.Fragment>
                <Modal
                    open={openAdd}
                    onClose={handleCloseAdd}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    closeAfterTransition
                    >
                    <Box sx={style}>
                        <div style={{ textAlign: "right" }}>
                            <IconButton onClick={() => {setOpenAdd(false);}}>
                                <CloseIcon style={{color: '#000'}} fontWeight="300" />
                            </IconButton>
                        </div>
                        <AddFashion/>
                    </Box>
                </Modal>
            </React.Fragment>
        </div>
    )
}