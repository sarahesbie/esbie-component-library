import React from "react";
import {
  Button,
  CardGallery,
  FullWidthSection,
  Heading,
  HeadingWithIcon,
  Icon,
  IconGallery,
  ImageTextBlock,
  Paragraph,
  Spacer,
  TextWithTooltip,
  TwoColumnBlock,
} from "../../src";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact, faNodeJs, faAws } from "@fortawesome/free-brands-svg-icons";

const App = () => (
  <main>
    {/* Hero Section */}
    <FullWidthSection>
      <Heading level={1}>Esbie UI</Heading>
      <Spacer size="medium" />

      <Paragraph>
        A library of reusable, customisable components built with React,
        TypeScript, and SCSS modules.
      </Paragraph>
      <Spacer size="large" />
      {/* <Button onClick={() => alert("You clicked the button!")}>Click Me</Button> */}
    </FullWidthSection>

    {/* Icons Section */}
    <FullWidthSection>
      <Heading level={2}>Icons & Icon Gallery</Heading>
      <Spacer size="large" />

      <IconGallery
        icons={[
          {
            icon: <i className="fa-brands fa-react"></i>,
            caption: "React",
          },
          {
            icon: <i className="fa-brands fa-node-js"></i>,
            caption: "Node.js",
          },
          {
            icon: <i className="fa-brands fa-aws"></i>,
            caption: "AWS",
          },
        ]}
        withCaptions
        size="large"
      />
    </FullWidthSection>

    {/* Cards Section */}
    <FullWidthSection>
      <Heading level={2}>Card Gallery</Heading>
      {/* <CardGallery
        cards={[
          {
            title: "Project 1",
            description: "A brief description of Project 1.",
            link: "https://example.com/project1",
            backgroundImage: "https://picsum.photos/300/200?random=1",
          },
          {
            title: "Project 2",
            description: "A brief description of Project 2.",
            link: "https://example.com/project2",
            backgroundImage: "https://picsum.photos/300/200?random=2",
          },
        ]}
      /> */}
    </FullWidthSection>

    <FullWidthSection>
      <Heading level={2}>Two Column Block</Heading>
      <Spacer size="large" />

      <TwoColumnBlock
        leftColumn={
          <ImageTextBlock
            imageSrc="https://picsum.photos/200/300"
            altText="Column 1 Title"
          >
            This is some content for the first column.
          </ImageTextBlock>
        }
        rightColumn={
          <ImageTextBlock
            imageSrc="https://picsum.photos/200/300?grayscale"
            altText="Column 2 Title"
          >
            This is some content for the second column.
          </ImageTextBlock>
        }
      />
    </FullWidthSection>

    {/* Tooltip Section */}
    <FullWidthSection>
      <Heading level={2}>Text With Tooltip</Heading>
      <Spacer size="large" />

      <Paragraph>
        This is a demo of the{" "}
        <TextWithTooltip
          text="tooltip"
          tooltipContent="Here is some helpful information!"
        />{" "}
        component. Hover over the word to see more information.
      </Paragraph>
    </FullWidthSection>

    {/* Spacer Demo */}
    <FullWidthSection>
      <Heading level={2}>Spacer Demo</Heading>
      <Paragraph>Here is some text followed by a spacer:</Paragraph>
      <Spacer size="large" />
      <Paragraph>Here is more text after the spacer.</Paragraph>
    </FullWidthSection>
  </main>
);

export default App;
