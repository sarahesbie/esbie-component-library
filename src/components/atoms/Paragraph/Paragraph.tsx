import { ReactNode } from "react";
import { useTheme } from "../../../theme/ThemeContext";
import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  children?: ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  const { theme } = useTheme();
  const themeClass = theme === "dark" ? styles.dark : styles.light;

  return <p className={`${styles.paragraph} ${themeClass}`}>{children}</p>;
};

export default Paragraph;
