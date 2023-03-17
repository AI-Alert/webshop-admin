import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logoutUser } from '../../store/actions/actions';
import { routesNames } from '../../utils/constants';
import { ModalLogOut } from '../modals/modalLogOut/ModalLogOut';
import {
  childBoxStyles,
  mainBoxStyles,
  useStyles,
} from './header.styles';

export const Header = (): JSX.Element => {
  const [logOutVisible, setLogOutVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogout = useCallback((): void => {
    logoutUser()(dispatch).finally(() => {
      navigate(routesNames.logIn);
    });
    setLogOutVisible(false);
  }, []);

  return (
    <>
      <div className={classes.mainBox}>
        <Box sx={mainBoxStyles}>
          <AppBar position="static">
            <Toolbar>
              <Box sx={mainBoxStyles} >
                <Box>
                  <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    onClick={() => {
                      console.log('test');
                    }}
                  >
                    <MenuRoundedIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box sx={childBoxStyles}>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  onClick={(): void => setLogOutVisible(true)}
                >
                  <LogoutIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <ModalLogOut
        open={logOutVisible}
        setOpen={setLogOutVisible}
        handleSubmit={handleLogout}
      />
    </>
  );
};
