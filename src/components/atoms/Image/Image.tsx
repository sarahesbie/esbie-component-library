interface ImageProps {
  src: string;
  alt: string;
  link?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const Image = ({
  src,
  alt,
  link,
  width,
  height,
  className,
  style,
}: ImageProps) => {
  const image = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
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
