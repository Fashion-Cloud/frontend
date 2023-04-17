import React from 'react';
import {
    // Modal,
    Box,
    IconButton,
    Typography
} from '@mui/material';
import {
    Modal,
    ModalDialog,
    ModalClose,
} from '@mui/joy';
import CloseIcon from "@mui/icons-material/Close";

export default function FashioinDetailModal() {
    const [open, setOpen] = React.useState<boolean>(false);
    
    return (
        <React.Fragment>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <ModalDialog
                    color="primary"
                    layout="center"
                    size="md"
                    variant="soft"
                >
                    <ModalClose />
                    <Typography>Modal title</Typography>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    )
}