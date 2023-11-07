import { createTheme } from '@mui/material/styles';
import Abril from '../../fonts/Abril_Fatface/AbrilFatface-Regular.ttf'

const dashboardTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Abril';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Abril'), local('Abril-regular'), url(${Abril}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#FEF9F0',  // light beige
      light: '#FFFFFF', // pure white
      dark: '#FDF7E9'   // slightly deeper beige
    },
    secondary: {
      main: '#000000',  // black
      light: '#7A7A7A'  // grey (as a lighter shade of black)
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default dashboardTheme