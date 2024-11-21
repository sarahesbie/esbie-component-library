// Importing Atoms
import Button from "./components/atoms/Button/Button";
import Icon from "./components/atoms/Icon/Icon";
import Card from "./components/atoms/Card/Card";
import Image from "./components/atoms/Image/Image";
import Heading from "./components/atoms/Heading/Heading";
import Text from "./components/atoms/Text/Text";
import Paragraph from "./components/atoms/Paragraph/Paragraph";
import Toggle from "./components/atoms/Toggle/Toggle";
import Spacer from "./components/atoms/Spacer/Spacer";

// Importing Molecules
import StyledImage from "./components/molecules/StyledImage/StyledImage";
import InteractiveHeading from "./components/molecules/InteractiveHeading/InteractiveHeading";
import IconWithCaption from "./components/molecules/IconWithCaption/IconWithCaption";
import ThemeToggle from "./components/molecules/ThemeToggle/ThemeToggle";
import HeadingWithIcon from "./components/molecules/HeadingWithIcon/HeadingWithIcon";
import TextWithTooltip from "./components/molecules/TextWithToolTip/TextWithToolTip";

// Importing Organisms
import IconGallery from "./components/organisms/IconGallery/IconGallery";
import CardGallery from "./components/organisms/CardGallery/CardGallery";
import ImageTextBlock from "./components/organisms/ImageTextBlock/ImageTextBlock";
import TwoColumnBlock from "./components/organisms/TwoColumnBlock/TwoColumnBlock";

// Importing Templates
import FullWidthSection from "./components/templates/FullWidthSection/FullWidthSection";
import ReverseSplitSection from "./components/templates/ReverseSplitSection/ReverseSplitSection";
import SplitSection from "./components/templates/SplitSection/SplitSection";

// Importing Theme
import { ThemeProvider, useTheme } from "./theme/ThemeContext";

// Exporting Components
export {
  // Atoms
  Button,
  Icon,
  Card,
  Image,
  Heading,
  Text,
  Paragraph,
  Toggle,
  Spacer,

  // Molecules
  StyledImage,
  InteractiveHeading,
  IconWithCaption,
  ThemeToggle,
  HeadingWithIcon,
  TextWithTooltip,

  // Organisms
  IconGallery,
  CardGallery,
  ImageTextBlock,
  TwoColumnBlock,

  // Templates
  FullWidthSection,
  ReverseSplitSection,
  SplitSection,

  //Theme
  ThemeProvider,
  useTheme,
};
