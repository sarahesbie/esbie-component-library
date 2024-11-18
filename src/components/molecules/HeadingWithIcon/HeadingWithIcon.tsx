import { ReactNode } from "react";
import Heading from "../../atoms/Heading/Heading";
import styles from "./HeadingWithIcon.module.scss";

interface HeadingWithIconProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  icon: ReactNode;
  children: ReactNode;
  iconPosition?: "left" | "right";
}

const HeadingWithIcon = ({
  level = 1,
  icon,
  children,
  iconPosition = "right",
}: HeadingWithIconProps) => {
  return (
    <div className={`${styles.headingWithIcon} ${styles[iconPosition]}`}>
      {iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
      <Heading level={level}>{children}</Heading>
      {iconPosition === "right" && <span className={styles.icon}>{icon}</span>}
    </div>
  );
};

export default HeadingWithIcon;
