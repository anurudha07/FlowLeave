import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './assets/index.css'
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#000000' },
    background: { default: '#000000', paper: '#000000' }
  },
  typography: { fontFamily: 'Segoe UI, sans-serif', fontSize: 13 },
  spacing: 8  // reduces default 8px * 4 = 32px base spacing
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
         <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);