import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { lookbookNameState } from '../../../utils/Recoil';

export default function TopBox() {
  const lookbookName = useRecoilValue(lookbookNameState);

  useEffect(() => {
    console.log('lookbookName: ', lookbookName);
  }, []);

  return (
    <Box
      sx={{
        position: 'flex',
        color: '#868686',
        top: '0px',
        cursor: 'pointer',
        ml: '10px',
        textDecoration: 'none',
      }}
    >
      <ArrowBackIosNewIcon sx={{ height: '20px', mr: '5px' }} />
      <Typography>모든 룩북</Typography>
      <Typography fontSize="20pt" sx={{ ml: '50px' }}>
        {lookbookName}
      </Typography>
    </Box>
  );
}
