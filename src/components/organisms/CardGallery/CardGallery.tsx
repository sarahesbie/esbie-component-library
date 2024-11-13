import Card from "../../atoms/Card/Card";

interface CardGalleryProps {
  cards: React.ReactNode[];
  galleryId?: any;
}

const CardGallery = ({ cards, galleryId }: CardGalleryProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      {cards.map((card, index) => (
        <Card key={`${galleryId}-${index}`} id={`${galleryId}-card-${index}`}>
          {card}
        </Card>
      ))}
    </div>
  );
};

export default CardGallery;
