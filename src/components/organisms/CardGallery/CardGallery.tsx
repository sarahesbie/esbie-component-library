import Card from "../../atoms/Card/Card";
import styles from "./CardGallery.module.scss";

interface CardGalleryProps {
  cards: React.ReactNode[];
  galleryId?: string;
}

const CardGallery = ({ cards, galleryId }: CardGalleryProps) => {
  return (
    <div className={styles.cardGallery}>
      {cards.map((card, index) => (
        <Card key={`${galleryId}-${index}`} id={`${galleryId}-card-${index}`}>
          {card}
        </Card>
      ))}
    </div>
  );
};

export default CardGallery;
