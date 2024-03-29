import { createUseStyles } from 'react-jss';
import { ITheme, theme as themeConstants } from '../theme';

export const boxStyles = {
  borderRadius: '50%',
  height: 42,
  width: 42,
  background: themeConstants.grey,
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
};

type RuleNames =
  | 'alert';

const PREFIX = 'AlertPopup';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>(
  (theme: ITheme) => (
    {
      alert: {
        fontSize: 14,
        '& .MuiAlert-icon': {
          color: 'black',
        },
        '& .MuiSvgIcon-root': {
          marginTop: 7,
        },
        '& .MuiAlert-message': {
          color: 'black',
          fontSize: 12,
          fontFamily: theme.abhayaLibre,
        },
        '& .MuiAlertTitle-root': {
          fontWeight: 500,
          fontSize: 16,
          color: 'black',
          fontFamily: theme.abhayaLibre,
        },
        '& .MuiAlert-root': {
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 1000000000,
          width: 420,
          height: 66,
          borderRadius: '10px',
          backgroundColor: 'white',
          color: theme.black,
          border: '1px solid #bbbbbb',
        },
      },
    }
  ),
  { name: PREFIX },
);
