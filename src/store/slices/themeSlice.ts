// redux/slices/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDark(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload;
    },
    toggle(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const { setDark, toggle } = themeSlice.actions;
export default themeSlice.reducer;
