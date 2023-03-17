import { createContext, useState } from 'react';
import { AlertColor } from '@mui/material';

const ALERT_TIME = 5000;
const initialState = {
  text: '',
  type: '',
};

export const AlertContext = createContext({
  ...initialState,
  setAlert: (alertText: string, alertType: AlertColor) => {},
});

export const AlertProvider = ({ children } :{ children: JSX.Element }): JSX.Element => {
  const [text, setText] = useState('');
  const [type, setType] = useState<AlertColor>('warning');

  const setAlert = (alertText: string, alertType: AlertColor): void => {
    setText(alertText);
    setType(alertType);

    setTimeout(() => {
      setText('');
      setType('warning');
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
