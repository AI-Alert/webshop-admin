import { createUseStyles } from 'react-jss';
import { ITheme } from '../theme';

type RuleNames = | 'inputLabel';

const PREFIX = 'InputLabel';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>((theme: ITheme) => ({
  inputLabel: {
    marginLeft: -13,
    fontWeight: 600,
  },
}), { name: PREFIX });
