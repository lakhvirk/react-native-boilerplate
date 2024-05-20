import { $Values } from 'utility-types';
import dimens from '@/theme/dimens';
import { CustomFonts } from '@/theme/fonts';
import { ImageSourcePropType } from 'react-native';

export type AppThemeType = 'dark' | 'light';

export interface Palette {
  background: string;
  buttonBackground: string;
  error: string;
  grey: string;
  text: string;
  textSuccess: string;
  primary: string;
  success: string;
  warning: string;
}

export type Theme = {
  alertColor: string;
  backgroundColor: string;
  buttonBackground: string;
  errorColor: string;
  icon: string;
  primaryColor: string;
  secondaryColor: string;
  semiTransparentTitleTextColor: string;
  successTextColor: string;
  titleTextColor: string;
  transparent: string;
  whiteDisabled: string;
};

export type Images = {
  logo: ImageSourcePropType;
};

export type ThemeColorKey = keyof Theme;

export type ThemeColor = $Values<Theme>;

export type AppTheme = {
  themeType: AppThemeType;
  images: Images;
  colors: Theme;
  dimens: typeof dimens;
  fonts: typeof CustomFonts;
};
