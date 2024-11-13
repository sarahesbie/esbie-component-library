import { ReactNode } from "react";
import { useTheme } from "../../../../theme/ThemeContext";
import { lightTheme, darkTheme } from "../../../../theme/theme";
import styled from "styled-components";

interface ParagraphProps {
  children?: ReactNode;
}

const StyledParagraph = styled.p<{ themeMode: "light" | "dark" }>`
  background-color: ${(props) =>
    props.themeMode === "dark" ? darkTheme.background : lightTheme.background};
  color: ${(props) =>
    props.themeMode === "dark" ? darkTheme.text : lightTheme.text};
`;

const Paragraph = ({ children }: ParagraphProps) => {
  const { theme } = useTheme();

  return <StyledParagraph themeMode={theme}>{children}</StyledParagraph>;
};

export default Paragraph;
