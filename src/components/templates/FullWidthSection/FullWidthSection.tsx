import { ReactNode } from "react";
import styles from "./FullWidthSection.module.scss";

interface FullWidthSectionProps {
  children: ReactNode;
  theme?: "dark" | "light";
}

const FullWidthSection = ({
  children,
  theme = "light",
}: FullWidthSectionProps) => {
  return (
    <section
      className={`${styles.section} ${
        theme === "dark" ? styles["section--dark"] : styles["section--light"]
      }`}
    >
      {children}
    </section>
  );
};

export default FullWidthSection;
