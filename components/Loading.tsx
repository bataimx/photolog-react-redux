import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import { isLoadingSelector } from '../redux';

export default () => {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
