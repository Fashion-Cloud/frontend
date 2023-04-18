import React from 'react';
import {
    Box,
    IconButton,
    Modal
  } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

export default function FashioinDetailModal() {
    const [openDetail, setOpenDetail] = React.useState(false);
    const handleOpenDetail = () => setOpenDetail(true);
    const handleCloseDetail =  () => setOpenDetail(false);
    
    return (
        <React.Fragment>
            <Modal
                open={openDetail}
                onClose={handleCloseDetail}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                closeAfterTransition
                >
                <Box sx={style}>
                    <div style={{ textAlign: "right" }}>
                        <IconButton onClick={() => {setOpenDetail(false);}}>
                            <CloseIcon style={{color: '#000'}} fontWeight="300" />
                        </IconButton>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    )
}