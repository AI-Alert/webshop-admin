import { createUseStyles } from 'react-jss';
import { Dialog, styled } from '@mui/material';
import { ITheme } from '../../theme';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const dialogStyles = { m: 0, p: 2 };

type RuleNames =
  | 'uploadBtn'
  | 'modal'
  | 'modalTitle'
  | 'modalMainTitle'
  | 'contentBlock';

const PREFIX = 'ModalLogOut';
export const useStyles = createUseStyles<RuleNames, unknown, ITheme>(
  (theme: ITheme) => (
    {
      modal: {
        '& .MuiDialog-paper': {
          width: '480px',
          maxWidth: '480px',
          borderRadius: '20px',
        },
        '& .MuiDialogContent-root': {
          padding: '0 40px 8px 40px',
        },
        '& .MuiDialogTitle-root': {
          padding: '40px 40px 0px 40px',
        },
        '& .MuiDialogActions-root': {
          padding: '0px 20px 30px',
        },
      },
      uploadBtn: {
        backgroundColor: theme.black,
      },
      modalTitle: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '20px',
        margin: '20px 0',
      },
      modalMainTitle: {
        fontSize: '34.5px',
        fontWeight: 600,
      },
      contentBlock: {
        display: 'flex',
        alignItem: 'center',
      },
    }
  ),
  { name: PREFIX },
);
