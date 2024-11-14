import React from "react";
import {
  Button,
  CardGallery,
  FullWidthSection,
  Heading,
  IconGallery,
  ImageTextBlock,
  Paragraph,
  ThemeToggle,
  TwoColumnBlock,
} from "../../src";
import { ThemeProvider } from "../../src/theme/ThemeContext";

const App: React.FC = () => {
  const cardContents = [
    <p>Talent Community Platform</p>,
    <p>Esbie Component Library</p>,
    <p>School of Code</p>,
    <p>Echobot Journal</p>,
    <p>Capri Theatre</p>,
    <p>Workshops & Speaking</p>,
  ];

  const techIcons = [
    {
      icon: <img src="https://picsum.photos/id/237/80/?grayscale" />,
      caption: "Caption 1",
    },
    {
      icon: <img src="https://picsum.photos/id/237/80/?grayscale" />,
      caption: "Caption 2",
    },
    {
      icon: <img src="https://picsum.photos/id/237/80/?grayscale" />,
      caption: "Caption 3",
    },
  ];

  const linkIcons = [
    {
      icon: <img src="https://picsum.photos/id/237/150/?grayscale" />,
      caption: "Caption 1",
    },
    {
      icon: <img src="https://picsum.photos/id/237/150/?grayscale" />,
      caption: "Caption 1",
    },
  ];
  return (
    // <div>
    //   <h1>Component Library Playground</h1>
    //   <Button onClick={() => alert("Button clicked!")}>click me!</Button>
    // </div>
    <ThemeProvider>
      <main>
        <FullWidthSection>
          <ThemeToggle />
          {/* hero */}
          <ImageTextBlock
            imageSrc="https://picsum.photos/id/65/200/300"
            altText="hero image"
          >
            <Heading level={2}>
              Hi, I'm Sarah! I'm a cloud native, full-stack web developer.
            </Heading>{" "}
          </ImageTextBlock>
        </FullWidthSection>
        <FullWidthSection>
          {/* work */}
          <CardGallery cards={cardContents} galleryId="portfolio-cards" />
        </FullWidthSection>
        <FullWidthSection>
          {/* tools */}
          <IconGallery icons={techIcons} withCaptions={true} />
        </FullWidthSection>
        <FullWidthSection>
          {/* about */}
          <Heading level={3}>Something about me and my values</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illud non
            continuo, ut aeque incontentae. Oratio me istius philosophi non
            offendit; Duo Reges: constructio interrete. Nihil opus est exemplis
            hoc facere longius.
          </Paragraph>
        </FullWidthSection>
        <FullWidthSection>
          {/* more */}
          <TwoColumnBlock
            leftColumn={<Heading level={3}>More from me </Heading>}
            rightColumn={<IconGallery icons={linkIcons} withCaptions={true} />}
          />
        </FullWidthSection>
      </main>
    </ThemeProvider>
  );
};

export default App;
