import { ReactNode } from "react";
import styles from "./FullWidthSection.module.scss";

interface FullWidthSectionProps {
  children: ReactNode;
  theme?: "dark" | "light";
  backgroundImage?: string;
  backgroundType?: "section" | "content";
  alignment?: "left" | "center";
  glassEffect?: boolean;
}

const FullWidthSection = ({
  children,
  theme = "light",
  backgroundImage,
  backgroundType,
  alignment = "left",
  glassEffect = false,
}: FullWidthSectionProps) => {
  return (
    <section
      className={`${styles.fullWidthSection} ${
        theme === "dark" ? styles["section--dark"] : styles["section--light"]
      } ${alignment === "left" ? styles.alignLeft : styles.alignCenter} ${
        glassEffect ? styles.glassEffect : ""
      }`}
      style={
        backgroundType === "section" && backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : {}
      }
    >
      <div
        className={styles.content}
        style={
          backgroundType === "content" && backgroundImage
            ? { backgroundImage: `url(${backgroundImage})` }
            : {}
        }
      >
        {children}
      </div>
    </section>
  );
};

export default FullWidthSection;
