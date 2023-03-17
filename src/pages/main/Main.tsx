import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header } from '../../components/header/Header';
import { childBoxStyles, mainBoxStyles, useStyles } from './main.styles';

export const Main: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Box sx={mainBoxStyles} className={classes.mainContent}>
        <Box
          component="main"
          sx={childBoxStyles}
        >
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};
