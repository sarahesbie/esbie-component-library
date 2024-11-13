import Image from "../../atoms/Image/Image";

interface StyledImageProps {
  src: string;
  alt: string;
  borderStyle?: "none" | "solid" | "dashed" | "rounded";
}

const StyledImage = ({ src, alt, borderStyle = "none" }: StyledImageProps) => {
  const borderStyles = {
    none: "none",
    solid: "1px solid black",
    dashed: "1px dashed black",
    rounded: "1px solid black",
  };

  return (
    <Image
      src={src}
      alt={alt}
      style={{
        border: borderStyles[borderStyle],
        borderRadius: borderStyle === "rounded" ? "50%" : "0",
      }}
    />
  );
};

export default StyledImage;
