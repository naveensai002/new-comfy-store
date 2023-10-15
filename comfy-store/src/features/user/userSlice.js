import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

const themes = {
  light: 'light',
  dark: 'dark',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.dark;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: { userName: 'naveen sai' },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
      toast.success('login successfull');
    },
    logoutUser: (state) => {
      // console.log('logout');
      state.user = null;
      localStorage.removeItem('user');
      toast.success('logged out successful');
    },
    toggleTheme: (state) => {
      const { dark, light } = themes;
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
      toast.success(`theme set to ${state.theme}`);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
