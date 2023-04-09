import {
    Modal,
    Box,
    IconButton,
    
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import React from 'react';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 650,
    width: 900,
    bgcolor: "#212121",
    border: 'inset #FEDE29',
    borderWidth: 'thick',
    borderRadius: "25px",
    boxShadow: 24,
    p: 4,
  };

export default function AddFashionModal(){
    // export default function AddFashionModal({openAdd: boolean, handleOpenAdd, handleCloseAdd}){
    // const [openAdd, setOpenAdd] = React.useState(false);
    // const handleOpenAdd = () => setOpenAdd(true);
    // const handleCloseAdd =  () => setOpenAdd(false);

    return(
        <React.Fragment>
            {/* <Modal
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                closeAfterTransition
                >
                <Box sx={style}>
                    <div style={{ textAlign: "right" }}>
                        <IconButton onClick={() => {setOpenAdd(false);}}>
                            <CloseIcon style={{color: '#FFFFFF'}} fontWeight="300" />
                        </IconButton>
                    </div>
                </Box>
            </Modal> */}
        </React.Fragment>
    )
}