import { ReactNode } from "react";
import styles from "./ReverseSplitSection.module.scss";

interface ReverseSplitSectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

const ReverseSplitSection = ({
  leftContent,
  rightContent,
}: ReverseSplitSectionProps) => {
  return (
    <section className={styles.reverseSplitSection}>
      <div className={styles.leftColumn}>
        <div className={styles.content}>{leftContent}</div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.content}>{rightContent}</div>
      </div>
    </section>
  );
};

export default ReverseSplitSection;
