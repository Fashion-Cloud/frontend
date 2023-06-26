import { useState } from "react";

import { 
    Box, 
    Button, 
    Divider, 
    IconButton, 
    InputBase, 
    Modal,
    Typography,
    Paper
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

export default function AddLookbookButton() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick={handleOpen} sx={{position: 'sticky', top: '0px', right: '0px'}}>
                <AddIcon sx={{mr: '5px'}}/>
                <Typography>
                    새 룩북
                </Typography>
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Box textAlign= 'right' sx={{mt: -1.7}}>
                        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>

                        <Typography textAlign= 'center' variant="h6" component='h2' sx={{mt: -4.5}}>
                            새 룩북 만들기
                        </Typography>
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Paper
                            component="form"
                            sx={{ backgroundColor: '#EFEFEF', mt: 2, p: '2px 4px', display: 'flex', alignItems: 'center', width: '400px', height: '45px', borderRadius: '5px' }}
                        >
                            <SearchIcon sx={{color: '#949494', mr: '4px'}}/>
                            <InputBase
                                style={{width: '350px'}}
                                placeholder="룩북 이름"
                            />
                        </Paper>
                    </Box>

                    <Divider sx={{mt: 3}}/>

                    <Box sx={{ mb: '-25px'}}>
                        <Button color="primary" fullWidth sx={{ textAlign: 'center' }}>
                            확인
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}