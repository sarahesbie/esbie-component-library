import { ReactNode } from "react";

interface TwoColumnBlockProps {
  leftColumn: ReactNode;
  rightColumn: ReactNode;
}

const TwoColumnBlock = ({ leftColumn, rightColumn }: TwoColumnBlockProps) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1 1 50%" }}>{leftColumn}</div>
      <div style={{ flex: "1 1 50%", paddingLeft: "1rem" }}>{rightColumn}</div>
    </div>
  );
};

export default TwoColumnBlock;
