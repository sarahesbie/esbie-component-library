import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  link?: string;
  id?: any;
}

const Card = ({ children, link, id }: CardProps) => {
  const content = (
    <div
      id={id}
      style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "4px" }}
    >
      {children}
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default Card;
