import { ThemeTypes } from './Types'

export const LightTheme: ThemeTypes = {
  title: 'Light',
  colors: {
    themeColors: {
      primary: {
        lighter: '#a597fe',
        light: '#6866FB',
        normal: '#5659EB',
        dark: '#3846D4',
        darker: '#6842C2'
      },
      secondary: '#F25040',
      tertiary: '#F0F0F7',

      text: {
        light: '#e5e3e9',
        normal: '#9C98A6',
        dark: '#6A6180'
      }
    },

    white: '#f7f7f7',
    grey: 'aeaeb0',
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#67e480',
    orange: '#E89E64',
    pink: '#FF79C6',
    blue: '#4347FE', /** #5659eb */
    red: '#E96379',
    yellow: '#e7de79'
  }
}

export const DarkTheme: ThemeTypes = {
  title: 'Dark',
  colors: {
    themeColors: {
      primary: {
        lighter: '#6866FB',
        light: '#494CDB',
        normal: '#5659EB',
        dark: '#3846D4',
        darker: '#6842C2'
      },
      secondary: '#1C2028',
      tertiary: '#2B303A',

      text: {
        light: '#D4C2FF',
        normal: '#9C98A6',
        dark: '#6A6180'
      }
    },
    white: '#f7f7f7',
    grey: 'aeaeb0',
    opaque: '#41414D',
    purple: '#6633cc',
    purpleDark: '#5A4B81',
    green: '#67e480',
    orange: '#E89E64',
    pink: '#FF79C6',
    blue: '#4347FE', /** #5659eb */
    red: '#E96379',
    yellow: '#e7de79'
  }
}
