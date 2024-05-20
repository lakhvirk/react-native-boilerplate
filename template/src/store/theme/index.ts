import { AppThemeType } from '@/theme/types';
import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  theme: AppThemeType;
};

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});
const { setTheme } = themeSlice.actions;

export { setTheme };

export default themeSlice.reducer;
