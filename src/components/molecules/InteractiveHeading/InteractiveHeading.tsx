// src/components/molecules/InteractiveHeading/InteractiveHeading.tsx
import Heading from "../../atoms/Heading/Heading";

interface InteractiveHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  tooltip?: string;
}

const InteractiveHeading = ({
  level = 1,
  children,
  tooltip,
}: InteractiveHeadingProps) => {
  return (
    <Heading level={level}>
      <span title={tooltip}>{children}</span>
    </Heading>
  );
};

export default InteractiveHeading;
