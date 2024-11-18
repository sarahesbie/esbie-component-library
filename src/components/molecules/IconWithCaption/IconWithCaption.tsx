import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import styles from "./IconWithCaption.module.scss";

interface IconWithCaptionProps {
  icon: React.ReactNode;
  caption: string;
  size?: "small" | "medium" | "large";
}

const IconWithCaption = ({
  icon,
  caption,
  size = "medium",
}: IconWithCaptionProps) => {
  return (
    <div className={`${styles.iconWithCaption} ${styles[size]}`}>
      <Icon size={size}>{icon}</Icon>
      <Text>{caption}</Text>
    </div>
  );
};

export default IconWithCaption;
