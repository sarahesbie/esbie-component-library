import { ReactNode } from "react";
import styles from "./Heading.module.scss";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
  className?: string;
}

const Heading = ({ level = 1, children, className }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${styles.heading} ${className || ""}`}>{children}</Tag>
  );
};

export default Heading;
