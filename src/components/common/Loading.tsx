import {
    Backdrop,
    CircularProgress
} from '@mui/material';
import React from 'react';

type LoadingProps = {
    state: boolean;
}

export default function Loading({state}: LoadingProps){
    const [open, setOpen] = React.useState(state);
    const handleOpen = () => {
      setOpen(true);
    };

    return(
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}