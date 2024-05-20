import { AppThemeType, Palette, Theme } from '@/theme/types';
import { HexAlpha, semiTransparentColor } from './colorHelper';

const white = '#FFFFFF';
const black = '#000000';
const transparent = 'transparent';

export const createTheme = (
  themeName: AppThemeType,
  palette: Palette,
): Theme => ({
  alertColor: palette.warning,
  backgroundColor: palette.background,
  buttonBackground: palette.buttonBackground,
  errorColor: palette.error,
  icon: palette.grey,
  primaryColor: palette.primary,
  secondaryColor: palette.warning,
  semiTransparentTitleTextColor: semiTransparentColor(
    palette.text,
    HexAlpha.Percent65,
  ),
  successTextColor: palette.textSuccess,
  titleTextColor: palette.text,
  transparent: transparent,
  whiteDisabled: semiTransparentColor(
    themeName === 'light' ? black : white,
    HexAlpha.Percent65,
  ),
});
