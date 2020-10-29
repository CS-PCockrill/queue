import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.indigo[900]
    },
    warning: {
      main: colors.yellow[600]
    },
    info: {
      main: colors.cyan.A200,
      // light: colors.cyan[50]
      light: '#f4fefd'
    },
    secondary: {
      main: colors.grey[400],
      light: colors.grey[100],
      dark: colors.grey[600],
    },
    error: {
      main: colors.red[800]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  shadows,
  typography
});

export default theme;
