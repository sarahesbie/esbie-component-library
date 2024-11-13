import { ReactNode } from "react";
import Icon from "../../atoms/Icon/Icon";
import IconWithCaption from "../../molecules/IconWithCaption/IconWithCaption";

interface IconGalleryProps {
  icons: { icon: ReactNode; caption?: string }[];
  withCaptions?: boolean;
}

const IconGallery = ({ icons, withCaptions = false }: IconGalleryProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
        gap: "1rem",
      }}
    >
      {icons.map((item, index) =>
        withCaptions ? (
          <IconWithCaption
            key={index}
            icon={item.icon}
            caption={item.caption || ""}
          />
        ) : (
          <Icon key={index}>{item.icon}</Icon>
        )
      )}
    </div>
  );
};

export default IconGallery;
