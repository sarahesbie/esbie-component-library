import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps {
  href: string;
  children?: ReactNode;
  target?: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ExternalLink = ({
  href,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  className,
  style,
  onClick,
}: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
