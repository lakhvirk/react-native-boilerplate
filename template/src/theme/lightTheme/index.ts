import { createTheme } from '@/theme';
import { Palette } from '@/theme/types';

const palette: Palette = {
  background: '#F2F4F5',
  buttonBackground: '#1DD377',
  error: '#F68D30',
  grey: '#B0B7C3',
  success: '#1DD377',
  text: '#172026',
  primary: '#B0B7C3',
  textSuccess: '#18A961',
  warning: '#FFC730',
};

export default createTheme('light', palette);
