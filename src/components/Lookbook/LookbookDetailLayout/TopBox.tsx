import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { lookbookNameState } from '../../../utils/Recoil';

export default function TopBox() {
  const lookbookName = useRecoilValue(lookbookNameState);

  useEffect(() => {
    console.log('lookbookName: ', lookbookName);
  }, []);

  return (
    <Box>
      <Link href={{ pathname: '/mypage'}} style={{ textDecoration: "none", display: 'flex', color: '#868686', marginTop: '10px', marginBottom: '20px', cursor: 'pointer', marginLeft: '10px'}}>
        <ArrowBackIosNewIcon sx={{ height: '20px', mr: '5px' }} />
        <Typography>모든 룩북</Typography>
      </Link>
      <Typography fontSize="20pt" sx={{ ml: '50px' }}>
        {lookbookName}
      </Typography>
    </Box>
  );
}
