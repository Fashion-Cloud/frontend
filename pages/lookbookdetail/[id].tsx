import { Box } from '@mui/material';
import React from 'react';

import LookbookDetailLayout from '../../src/components/layout/LookbookDetailLayout';

export default function LookbookDetailpage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ width: '100%', height: '100vh', backgroundColor: '#F5F8FC' }}
    >
      <LookbookDetailLayout />
    </Box>
  );
}
