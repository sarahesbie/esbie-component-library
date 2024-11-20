import styles from "./Image.module.scss";
interface ImageProps {
  src: string;
  alt: string;
  link?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

const Image = ({ src, alt, link, width, height, style }: ImageProps) => {
  const image = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={styles.image}
      style={style}
    />
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {image}
    </a>
  ) : (
    image
  );
};

export default Image;
