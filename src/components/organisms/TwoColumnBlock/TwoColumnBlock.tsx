import { ReactNode } from "react";
import styles from "./TwoColumnBlock.module.scss";

interface TwoColumnBlockProps {
  leftColumn: ReactNode;
  rightColumn: ReactNode;
}

const TwoColumnBlock = ({ leftColumn, rightColumn }: TwoColumnBlockProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>{leftColumn}</div>
      <div className={styles.rightColumn}>{rightColumn}</div>
    </div>
  );
};

export default TwoColumnBlock;
