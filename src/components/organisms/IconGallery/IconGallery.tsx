import { ReactNode } from "react";
import Icon from "../../atoms/Icon/Icon";
import IconWithCaption from "../../molecules/IconWithCaption/IconWithCaption";
import styles from "./IconGallery.module.scss";

interface IconGalleryProps {
  icons: { icon: ReactNode; caption?: string; link?: string }[];
  withCaptions?: boolean;
  size?: "small" | "medium" | "large";
}

const IconGallery = ({
  icons,
  withCaptions = false,
  size = "medium",
}: IconGalleryProps) => {
  return (
    <div className={styles.iconGallery}>
      {icons.map((item, index) =>
        withCaptions ? (
          <IconWithCaption
            key={index}
            icon={
              <Icon link={item.link} size={size}>
                {item.icon}
              </Icon>
            }
            caption={item.caption || ""}
            size={size}
          />
        ) : (
          <Icon key={index} link={item.link} size={size}>
            {item.icon}
          </Icon>
        )
      )}
    </div>
  );
};

export default IconGallery;
