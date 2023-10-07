import { InputBase, Paper, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

type TitleProps = {
  getTitleData: (data: string) => void;
};

export default function AddTitle({ getTitleData }: TitleProps) {
  const [postTitle, setPostTitle] = useState('');
  const postTitleHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPostTitle(e.target.value);
    getTitleData(e.target.value);
  };

  return (
    <Toolbar>
      <Typography fontFamily="BalooBhaijaan" fontWeight="700" fontSize="16pt">
        Title:
      </Typography>
      <Paper
        component="form"
        sx={{
          ml: 1,
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Write Down Your Fashion Title"
          value={postTitle}
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(e) => postTitleHandler(e)}
        />
      </Paper>
    </Toolbar>
  );
}
