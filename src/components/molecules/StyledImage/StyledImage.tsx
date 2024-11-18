import Image from "../../atoms/Image/Image";
import styles from "./StyledImage.module.scss";

interface StyledImageProps {
  src: string;
  alt: string;
  borderStyle?: "none" | "solid" | "dashed" | "rounded";
}

const StyledImage = ({ src, alt, borderStyle = "none" }: StyledImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${styles.image} ${styles[borderStyle]}`}
    />
  );
};

export default StyledImage;
