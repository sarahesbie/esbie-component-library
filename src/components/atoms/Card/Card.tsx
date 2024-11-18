import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  children: ReactNode;
  link?: string;
  id?: any;
  backgroundImage?: string;
  backgroundColor?: string;
}

const Card = ({
  children,
  link,
  id,
  backgroundImage,
  backgroundColor,
}: CardProps) => {
  const cardContent = (
    <div
      id={id}
      className={styles.card}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor: backgroundColor || undefined,
      }}
    >
      <div className={styles.cardContent}>{children}</div>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default Card;
