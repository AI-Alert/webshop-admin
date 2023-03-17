import { createUseStyles } from 'react-jss';
import { ITheme } from '../../theme';

type RuleNames =
  | 'input'
  | 'formControl'
  | 'andornment';

const PREFIX = 'Password';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>(
  (theme: ITheme) => (
    {
      input: {
        marginTop: 13,
        borderRadius: 8,
        height: 44,
        padding: 0,
      },
      formControl: {
        marginTop: 38,
        width: '100%',
        position: 'relative',

        '& .MuiOutlinedInput-root': {
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid black',
            },
            '& .MuiOutlinedLabel': {
              color: 'black',
            },
          },
        },
        '& .MuiFormLabel-root': {
          fontWeight: 400,
          '&.Mui-focused': {
            color: 'black',
          },
        },
      },
      andornment: {
        color: theme.grey,
      },
    }
  ),
  { name: PREFIX },
);
