import { ReactNode } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <span className="tooltip" data-tooltip={content}>
      {children}
    </span>
  );
};

export default Tooltip;
