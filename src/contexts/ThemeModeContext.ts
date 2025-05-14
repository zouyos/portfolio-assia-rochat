import { createContext, useContext } from "react";
import { type ThemeContextType } from "../types/types";

const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined);

function useThemeModeContext() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('ThemeModeContext must be used within a ThemeModeProvider');
  }
  return context
}

const THEME = {
  dark: {
    color: '#fffff0',
    backgroundColor: '#000000',
    btnClose: 'white'
  },
  light: {
    color: '#000000',
    backgroundColor: '#fffff0',
    btnClose: 'black'
  },
};

export { ThemeModeContext, useThemeModeContext, THEME };
