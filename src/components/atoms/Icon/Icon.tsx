import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  link?: string;
}

const Icon = ({ children, link }: IconProps) => {
  const content = <span>{children}</span>;

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default Icon;
