import React from "react";
import styles from "./Spacer.module.scss";

interface SpacerProps {
  size?: "small" | "medium" | "large";
}

const Spacer = ({ size = "medium" }: SpacerProps) => {
  return <div className={`${styles.spacer} ${styles[size]}`} />;
};

export default Spacer;
