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
      <div className={styles.container}>
        <div className={styles.leftColumn}>{leftContent}</div>
        <div className={styles.rightColumn}>{rightContent}</div>
      </div>
    </section>
  );
};

export default ReverseSplitSection;
