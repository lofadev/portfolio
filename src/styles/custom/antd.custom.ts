import { ThemeConfig } from 'antd';
import merge from 'deepmerge';
import { baseDarkTheme } from './base.color';

export const antdCustomLight: ThemeConfig = {
  token: {
    colorPrimary: baseDarkTheme.primary,
    borderRadius: 4,
  },
  components: {
    Switch: {
      trackHeight: 24,
      handleSize: 20,
      innerMaxMargin: 26,
      innerMinMargin: 4,
      trackMinWidth: 50,
    },
    Button: {
      paddingInline: 20,
      paddingBlock: 16,
      borderRadius: 100,
      defaultHoverColor: baseDarkTheme.primary,
      defaultHoverBorderColor: baseDarkTheme.primary,
    },
  },
};

type ThemeType = typeof antdCustomLight;

export const antdCustomDark: ThemeType = merge(antdCustomLight, {
  components: {
    Switch: {
      handleBg: baseDarkTheme.bgPrimary,
    },
  },
});
