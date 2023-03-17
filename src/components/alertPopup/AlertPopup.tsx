import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { Alert, AlertColor, AlertTitle, Box, Slide, useTheme } from '@mui/material';
import { useAlert } from '../../hooks/useAlert';
import { ITheme } from '../theme';
import { boxStyles, useStyles } from './alertPopup.styles';

export const AlertPopup = (): JSX.Element => {
  const { text, type } = useAlert();
  const theme: ITheme | undefined = useTheme();
  const classes = useStyles({ theme });

  if (text && type && true) {
    return (
      <div className={classes.alert}>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Alert
            icon={
              <Box sx={boxStyles}>
                <WarningAmberRoundedIcon />
              </Box>
            }
            severity={(type as AlertColor)}
          >
            <AlertTitle>Connection Error</AlertTitle>
            {text}
          </Alert>
        </Slide>
      </div>
    );
  }
  return <></>;
};
