import { createUseStyles } from 'react-jss';
import { ITheme } from '../../theme';

type RuleNames =
  | 'input'
  | 'formControl'
  | 'andornment';

const PREFIX = 'Email';
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
        marginTop: 40,
        width: '100%',
        position: 'relative',

        '& .MuiOutlinedInput-root': {
          fontSize: 14,
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
        marginRight: 19,
      },
    }
  ),
  { name: PREFIX },
);
