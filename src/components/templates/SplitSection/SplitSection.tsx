import { ReactNode } from "react";
import styles from "./SplitSection.module.scss";

interface SplitSection {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

const SplitSection = ({ leftContent, rightContent }: SplitSection) => {
  return (
    <section className={styles.splitSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>{leftContent}</div>
        <div className={styles.rightColumn}>{rightContent}</div>
      </div>
    </section>
  );
};

export default SplitSection;
