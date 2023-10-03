import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import MainLayout from '../components/layout/MainLayout';
import { menuState } from '../utils/Recoil';

export default function MainPage() {
  const setSelect = useSetRecoilState(menuState);

  useEffect(() => {
    setSelect('Home');
  }, []);

  return (
    <Box>
      <MainLayout />
    </Box>
  );
}
