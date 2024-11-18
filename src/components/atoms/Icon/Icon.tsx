import { ReactNode } from "react";
import styles from "./Icon.module.scss";

interface IconProps {
  children: ReactNode;
  link?: string;
  size?: "small" | "medium" | "large";
}

const Icon = ({ children, link, size = "medium" }: IconProps) => {
  const content = (
    <span className={`${styles.icon} ${styles[size]}`}>{children}</span>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default Icon;
