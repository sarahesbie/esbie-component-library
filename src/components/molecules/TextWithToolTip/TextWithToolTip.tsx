import Text from "../../atoms/Text/Text";
import Tooltip from "../../atoms/ToolTip/ToolTip";
// import styles from "./TextWithTooltip.module.scss";

interface TextWithTooltipProps {
  gradientIndex?: number;
  tooltipContent: string;
  text: string;
}

const TextWithTooltip = ({
  text,
  tooltipContent,
  gradientIndex = 1,
}: TextWithTooltipProps) => {
  const gradientClass = `gradient${gradientIndex}`;

  return (
    <Tooltip content={tooltipContent}>
      <span className={`${styles.textWithTooltip} ${styles[gradientClass]}`}>
        <Text>{text}</Text>
      </span>
    </Tooltip>
  );
};

export default TextWithTooltip;
