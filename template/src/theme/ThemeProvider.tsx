import React, { FC, useMemo } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import dimens from '@/theme/dimens';
import { CustomFonts } from '@/theme/fonts';
import { AppTheme } from '@/theme/types';
import { useAppSelector } from '@/store/useStore';
import darkTheme from './darkTheme';
import darkThemeImages from './darkTheme/images';
import lightTheme from './lightTheme';
import lightThemeImages from './lightTheme/images';

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  const { theme: themeType } = useAppSelector(state => state.theme);
  const customTheme: AppTheme = useMemo(
    () => ({
      themeType,
      images: themeType === 'light' ? lightThemeImages : darkThemeImages,
      colors: themeType === 'light' ? lightTheme : darkTheme,
      dimens,
      fonts: CustomFonts,
    }),
    [themeType],
  );

  return (
    <StyledComponentsThemeProvider theme={customTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
