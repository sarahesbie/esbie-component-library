import Card from "../../atoms/Card/Card";
import styles from "./CardGallery.module.scss";

interface CardGalleryProps {
  cards: {
    content: React.ReactNode;
    backgroundImage?: string;
    backgroundColor?: string;
    link?: string;
  }[];
  galleryId?: string;
}

const CardGallery = ({ cards, galleryId }: CardGalleryProps) => {
  return (
    <div className={styles.cardGallery}>
      {cards.map((card, index) => (
        <Card
          key={`${galleryId}-${index}`}
          id={`${galleryId}-card-${index}`}
          backgroundImage={card.backgroundImage}
          backgroundColor={card.backgroundColor}
          link={card.link}
        >
          {card.content}
        </Card>
      ))}
    </div>
  );
};

export default CardGallery;
