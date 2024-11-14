// Importing Atoms
import Button from "./components/atoms/Button/Button";
import Icon from "./components/atoms/Icon/Icon";
import Card from "./components/atoms/Card/Card";
import Image from "./components/atoms/Image/Image";
import Heading from "./components/atoms/Heading/Heading";
import Text from "./components/atoms/Text/Text";
import Paragraph from "./components/atoms/Paragraph/Paragraph";
import Toggle from "./components/atoms/Toggle/Toggle";

// Importing Molecules
import StyledImage from "./components/molecules/StyledImage/StyledImage";
import InteractiveHeading from "./components/molecules/InteractiveHeading/InteractiveHeading";
import IconWithCaption from "./components/molecules/IconWithCaption/IconWithCaption";
import ThemeToggle from "./components/molecules/ThemeToggle/ThemeToggle";

// Importing Organisms
import IconGallery from "./components/organisms/IconGallery/IconGallery";
import CardGallery from "./components/organisms/CardGallery/CardGallery";
import ImageTextBlock from "./components/organisms/ImageTextBlock/ImageTextBlock";
import TwoColumnBlock from "./components/organisms/TwoColumnBlock/TwoColumnBlock";

// Importing Templates
import FullWidthSection from "./components/templates/FullWidthSection/FullWidthSection";

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

  // Molecules
  StyledImage,
  InteractiveHeading,
  IconWithCaption,
  ThemeToggle,

  // Organisms
  IconGallery,
  CardGallery,
  ImageTextBlock,
  TwoColumnBlock,

  // Templates
  FullWidthSection,

  //Theme
  ThemeProvider,
  useTheme,
};
