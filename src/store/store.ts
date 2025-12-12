// redux/store.ts (update)
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

function getInitialThemeFromLocalStorage(): boolean {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    // fallback to system preference
    return typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (e) {
    return false;
  }
}

const preloadedState = {
  // note: ensure this shape matches your RootState
  // we set only theme slice initial value here
  theme: { isDark: getInitialThemeFromLocalStorage() },
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState,
});

store.subscribe(() => {
  try {
    // keep localStorage and html class in sync
    const state: any = store.getState();
    const isDark = !!state.theme?.isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark);
    }
  } catch (e) {
    // ignore storage errors (private mode, etc.)
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
