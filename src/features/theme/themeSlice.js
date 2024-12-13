import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    mode: localStorage.getItem('theme') || 'light',
    colors: {
        light: {
            primaryColor: "#15a894",
            backgroundColor: "#ffffff",
            textColor: "#000000",
            menuItemColor: "#333333",
            menuItemHoverColor: "#15a894",
            itemSelectedColor: "#15a894",
            itemColor: "#273142",
          },
          dark: {
            primaryColor: "#273142",
            backgroundColor: "#1B2431",
            textColor: "#ffffff",
            menuItemColor: "#ffffff",
            menuItemHoverColor: "#15a894",
            itemSelectedColor: "#fff",
            itemColor:"#ffffff"
          }
    }
  };
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode); 
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('theme', action.payload); 
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
