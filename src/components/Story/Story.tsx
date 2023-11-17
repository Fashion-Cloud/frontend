import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';

import UserIcon from './UserIcon';

type Props = {
  storyOpen: boolean;
  handleClose: () => void;
};

export default function StoryModal({ storyOpen, handleClose }: Props) {
  const nickName = [
    'wkdguss',
    'q2q2q2',
    'as123asd',
    'sa12ww',
    'zxcv03',
    'zxcv03',
    'zxcv03',
    'zxcv03',
    'zxcv03',
    'wkdguss',
  ];
  return (
    <Dialog
      onClose={handleClose}
      open={storyOpen}
      maxWidth={false}
      scroll={'body'}
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <DialogTitle sx={{ ml: 5, mt: 0.7, fontWeight: 700 }}>스토리</DialogTitle>
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 15,
          top: 12,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          height: 500,
          width: 727,
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          display: 'flex',
          // mx: 1,
          px: 5,
        }}
      >
        {nickName.map((nick, i) => (
          <UserIcon nick={nick} key={i} />
        ))}
      </DialogContent>
    </Dialog>
  );
}
