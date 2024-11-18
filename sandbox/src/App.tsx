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
import { ThemeProvider } from "../../src/theme/ThemeContext";
import { techIcons, linkIcons, cardData } from "./content";

const HeroSection = () => (
  <FullWidthSection>
    <ImageTextBlock
      imageSrc="./images/sarah-brown-web-developer.png"
      altText="hero image"
    >
      <Heading level={1}>
        Hi, I'm Sarah!👋🏼 <br />
        I'm a{" "}
        <TextWithTooltip
          text="cloud native,"
          tooltipContent="I design applications specifically for the cloud, so they can scale efficiently, recover quickly, and adapt as needed."
          gradientIndex={1}
        />{" "}
        <TextWithTooltip
          text="full-stack"
          tooltipContent="I handle both front-end and back-end development, managing everything from the user interface to the server"
          gradientIndex={2}
        />{" "}
        <TextWithTooltip
          text="web developer"
          tooltipContent="I create and maintain websites and web applications"
          gradientIndex={3}
        />
        .
      </Heading>
    </ImageTextBlock>
  </FullWidthSection>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <FullWidthSection>
    <Heading level={2}>{title}</Heading>
    <Spacer size="medium" />

    {children}
  </FullWidthSection>
);

const App = () => (
  <ThemeProvider>
    <main>
      <HeroSection />

      {/* <Section title="My Work">
        <CardGallery
          cards={cardData.map((card, index) => (
            <div key={index}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
          galleryId="projects"
        />
      </Section> */}

      <FullWidthSection
        backgroundImage="./images/dreamy-pastel-clouds.jpeg"
        backgroundType="content"
        alignment="center"
        glassEffect={true}
      >
        {" "}
        <Spacer size="large" />
        <Heading level={2}>About Me</Heading>
        <Spacer size="small" />
        <Paragraph size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illud non
          continuo, ut aeque incontentae. Oratio me istius philosophi non
          offendit; Duo Reges: constructio interrete. Nihil opus est exemplis
          hoc facere longius.
        </Paragraph>{" "}
        <Spacer size="large" />
      </FullWidthSection>

      <Section title="The Tools I Use">
        <IconGallery icons={techIcons} withCaptions={true} />
      </Section>

      <FullWidthSection>
        <TwoColumnBlock
          leftColumn={
            <HeadingWithIcon
              level={2}
              icon={<i className="fa-solid fa-arrow-right"></i>}
              iconPosition="right"
            >
              More from me
            </HeadingWithIcon>
          }
          rightColumn={
            <IconGallery icons={linkIcons} withCaptions={true} size="large" />
          }
        />
      </FullWidthSection>
    </main>
  </ThemeProvider>
);

export default App;
