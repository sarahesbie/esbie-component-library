import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  link?: string;
}

const Image = ({ src, alt, link, ...props }: ImageProps) => {
  const image = <img src={src} alt={alt} {...props} />;

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {image}
    </a>
  ) : (
    image
  );
};

export default Image;
