export type ThemeTypes = {
  title: string,
  colors: {
    themeColors: {
      primary: {
        lighter: string,
        light: string,
        normal: string,
        dark: string,
        darker: string,
      },
      secondary: string,
      tertiary: string,

      text: {
        light: string;
        normal: string;
        dark: string;
      }
    }

    white: string;
    grey: string;
    opaque: string;
    purple: string;
    purpleDark: string;
    green: string;
    orange: string;
    pink: string;
    blue: string;
    red: string;
    yellow: string;
  }
};
