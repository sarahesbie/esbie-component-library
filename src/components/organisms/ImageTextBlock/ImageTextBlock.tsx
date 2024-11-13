// src/components/organisms/ImageTextBlock/ImageTextBlock.tsx
import { ReactNode } from "react";
import StyledImage from "../../molecules/StyledImage/StyledImage";

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
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1 1 33%" }}>
        <StyledImage src={imageSrc} alt={altText} />
      </div>
      <div style={{ flex: "1 1 67%", paddingLeft: "1rem" }}>{children}</div>
    </div>
  );
};

export default ImageTextBlock;
