import { ReactNode } from "react";
import StyledImage from "../../molecules/StyledImage/StyledImage";
import styles from "./ImageTextBlock.module.scss";

interface ImageTextBlockProps {
  imageSrc: string;
  altText: string;
  children: ReactNode;
}

const ImageTextBlock = ({
  imageSrc,
  altText,
  children,
}: ImageTextBlockProps) => {
  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <StyledImage src={imageSrc} alt={altText} borderStyle="none" />
      </div>
      <div className={styles["text-container"]}>{children}</div>
    </div>
  );
};

export default ImageTextBlock;
