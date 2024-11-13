import { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return <span>{children}</span>;
};

export default Text;
