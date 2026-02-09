import { createContext, useEffect, useState } from "react";
import { THEME } from "../utils/types/theme";


export const ThemeContext = createContext({
  theme: THEME.LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<THEME>(
    (localStorage.getItem("theme") as THEME) || THEME.LIGHT
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === THEME.DARK) {
      root.classList.add(THEME.DARK);
    } else {
      root.classList.remove(THEME.DARK);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
