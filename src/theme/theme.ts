import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    custom: {
      primary: string;
      secondary: string;
      tertiary: string;
      dark: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      primary: string;
      secondary: string;
      tertiary: string;
      dark: string;
    };
  }
}

const themeConfig = {
  custom: {
    primary: '#14e76f',
    secondary: '#14b254',
    tertiary: '#17c865',
    dark: '#222b2d',
  },
};

export const lightTheme = createTheme({
  ...themeConfig,
  palette: {
    mode: 'light',
    primary: {
      main: themeConfig.custom.primary,
    },
    secondary: {
      main: themeConfig.custom.secondary,
    },
    background: {
      default: '#222b2d',
      paper: '#222b2d',
    },
  },
});

export const darkTheme = createTheme({
  ...themeConfig,
  palette: {
    mode: 'dark',
    primary: {
      main: themeConfig.custom.primary,
    },
    secondary: {
      main: themeConfig.custom.secondary,
    },
    background: {
      default: themeConfig.custom.dark,
      paper: '#222b2d',
    },
  },
});
