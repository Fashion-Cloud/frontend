import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import { 
    Box, IconButton, Modal 
} from "@mui/material";
import React from "react";

import AddFashion from "../../AddFashion/AddFashion";

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

export default function AddFashionButton() {
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd =  () => setOpenAdd(false);

    return (
        <Box>
            <IconButton  onClick={handleOpenAdd} sx={{mt: '15px', display: 'flex', justifyContent: 'end'}}>
                <AddCircleIcon fontSize="large" sx={{color: '#87A9D7'}}/>
            </IconButton>

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
        </Box>
    )
}