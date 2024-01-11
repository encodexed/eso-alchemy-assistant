import React, { createContext, useState } from 'react';

export interface ThemeCtx {
  theme: string;
  setTheme: (newTheme: string) => unknown;
}

export const ThemeContext = createContext<ThemeCtx>({
  theme: 'light',
  setTheme: () => true,
});

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
