import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeOptions } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { theme as themeConstants } from './components/theme';
import { AlertProvider } from './contexts/AlertContext';
import { createEmotionCache } from './createEmotionCache';
import { ErrorBoundary } from './ErrorBoundary';
import { Routing } from './routes';
import { setupStore } from './store/store';

import './index.css';
import './assets/fonts/AbhayaLibre/AbhayaLibre-Regular.ttf';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const theme = createTheme((themeConstants as ThemeOptions));
const cache = createEmotionCache();

root.render(
  <ErrorBoundary>
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <Provider store={store}>
            <Routing />
          </Provider>
        </AlertProvider>
      </ThemeProvider>
    </CacheProvider>
  </ErrorBoundary>,
);
