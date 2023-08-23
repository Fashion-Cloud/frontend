import {
    Button,
    Typography
} from '@mui/material'
import { useSnackbar,VariantType } from 'notistack';
import React from 'react'

type PostProps = {
    postAPI: Function
}

export default function PostButton({postAPI}: PostProps) {
    const { enqueueSnackbar } = useSnackbar();
    
    const handleClickVariant = (variant: VariantType) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
    };

    const clickPostButton = () => {
        handleClickVariant('success')
        postAPI()
    }
    
    return (
        <React.Fragment>
            <Button  variant="contained" style={{backgroundColor: "#8255A3",position: 'absolute', textTransform:"none", borderRadius: '20px'}} sx={{ml: 85, mt: 20}}
                onClick={clickPostButton}>
                <Typography sx={{ml: 5, mr: 5}}>
                    Post
                </Typography>
            </Button>
        </React.Fragment>
    );
}