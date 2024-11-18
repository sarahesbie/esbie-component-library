import { ReactNode } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <span className={styles.tooltip} data-tooltip={content}>
      {children}
    </span>
  );
};

export default Tooltip;
