export const baseLightTheme = {
  primary: '#5BADFF',
  secondary: '#1373D1',

  white: '#FFFFFF',
  transparent: 'transparent',

  border: '#C1C2D3',

  bgPrimary: '#FFFFFF',
  bgWrapper: '#F6F6F6',

  textPrimary: '#1A1A1A',
  textSecondary: '#667085',
  textDanger: '#F2596B',
};

export type BaseTheme = typeof baseLightTheme;

export const baseDarkTheme: BaseTheme = {
  ...baseLightTheme,

  bgPrimary: '#2A2A2A',
  bgWrapper: '#161513',

  textPrimary: '#FFFFFF',
  textSecondary: '#C0C5D0',
};
