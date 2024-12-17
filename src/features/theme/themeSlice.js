import { createSlice } from '@reduxjs/toolkit';

const getDefaultTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme; // استرجاع الثيم المحفوظ
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light'; // الوضع الافتراضي بناءً على النظام
};

const initialState = {
  mode: getDefaultTheme(),
  colors: {
    light: {
      primary: '#2E57A6',
      backgroundColor: '#F5F6FA',
      textColor: '#000000',
      tableBg : '#FFFFFF',
    },
    dark: {
      primary: '#273142',
      backgroundColor: '#1B2431',
      textColor: '#ffffff',
      tableBg : '#34495E',
    },
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode); // حفظ الثيم الجديد
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('theme', action.payload); // تعيين وحفظ الثيم
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
