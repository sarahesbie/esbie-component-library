import React from "react";
import Toggle from "../../atoms/Toggle/Toggle";
import { useTheme } from "../../../../theme/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return <Toggle onToggle={toggleTheme} isActive={isDarkMode} />;
};

export default ThemeToggle;
