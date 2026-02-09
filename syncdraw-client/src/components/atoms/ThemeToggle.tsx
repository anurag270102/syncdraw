import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { THEME } from "../../utils/types/theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 rounded-lg
        border border-gray-300
        dark:border-gray-600
        bg-white dark:bg-gray-800
        text-gray-700 dark:text-white
        shadow-sm
        transition
      "
    >
      {theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT}
    </button>
  );
};

export default ThemeToggle;
