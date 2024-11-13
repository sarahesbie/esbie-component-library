import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";

interface IconWithCaptionProps {
  icon: React.ReactNode;
  caption: string;
}

const IconWithCaption = ({ icon, caption }: IconWithCaptionProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Icon>{icon}</Icon>
      <Text>{caption}</Text>
    </div>
  );
};

export default IconWithCaption;
