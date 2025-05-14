import React, { useState, ReactNode, useEffect } from 'react';
import { ThemeModeContext } from './ThemeModeContext.ts';
import { type ThemeMode } from '../types/types';

type ThemeModeProviderProps = {
  children: ReactNode;
};

const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({ children }) => {
  const initialThemeMode: ThemeMode = (() => {
    const storedTheme = localStorage.getItem('themeMode');
    return storedTheme === 'light' || storedTheme === 'dark'
      ? (storedTheme as ThemeMode)
      : 'dark';
  })();

  const [themeMode, setThemeMode] = useState<ThemeMode>(initialThemeMode);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  const value = { themeMode, setThemeMode };

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeProvider };
