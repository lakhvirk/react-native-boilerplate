import { createTheme } from '@/theme';
import { Palette } from '@/theme/types';

const palette: Palette = {
  background: '#002147',
  buttonBackground: '#1DD377',
  error: '#F68D30',
  grey: '#B0B7C3',
  success: '#1DD377',
  text: '#FFFFFF',
  primary: '#E2725B',
  textSuccess: '#1DD377',
  warning: '#FFC730',
};

export default createTheme('dark', palette);
