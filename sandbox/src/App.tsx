import React from "react";
import {
  Button,
  CardGallery,
  FullWidthSection,
  Heading,
  HeadingWithIcon,
  Icon,
  IconGallery,
  Image,
  ImageTextBlock,
  Paragraph,
  ReverseSplitSection,
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
        size="medium"
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
            <Heading level={4}>Column 1 Title</Heading>
            <Paragraph>This is some content for the first column.</Paragraph>
          </ImageTextBlock>
        }
        rightColumn={
          <ImageTextBlock
            imageSrc="https://picsum.photos/200/300?grayscale"
            altText="Column 2 Title"
          >
            <Heading level={4}>Column 2 Title</Heading>
            <Paragraph>This is some content for the second column.</Paragraph>
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
    <ReverseSplitSection
      leftContent={
        <Heading level={2}>
          <Image alt="asdfa" src="./images/dreamy-pastel-clouds.jpeg" />{" "}
          <Image alt="asdfa" src="./images/dreamy-pastel-clouds.jpeg" />{" "}
          <Image alt="asdfa" src="./images/dreamy-pastel-clouds.jpeg" />
        </Heading>
      }
      rightContent={
        <>
          <Heading level={1}>Porfolio Item</Heading>
          <Paragraph size="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex quo, id
            quod omnes expetunt, beate vivendi ratio inveniri et comparari
            potest. Duo Reges: constructio interrete. Deprehensus omnem poenam
            contemnet. Ampulla enim sit necne sit, quis non iure optimo
            irrideatur, si laboret? Hoc loco tenere se Triarius non potuit.
            Quamquam id quidem licebit iis existimare, qui legerint.{" "}
          </Paragraph>
          <Spacer />
          <Heading level={2}>Porfolio Subhead</Heading>
          <Paragraph size="small">
            {" "}
            Pugnant Stoici cum Peripateticis. Morbo gravissimo affectus, exul,
            orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Polemoni
            et iam ante Aristoteli ea prima visa sunt, quae paulo ante dixi.
            Naturales divitias dixit parabiles esse, quod parvo esset natura
            contenta. Te enim iudicem aequum puto, modo quae dicat ille bene
            noris. Quamvis enim depravatae non sint, pravae tamen esse possunt.
            Quae cum dixisset paulumque institisset, Quid est? Multoque hoc
            melius nos veriusque quam Stoici. Ab hoc autem quaedam non melius
            quam veteres, quaedam omnino relicta. Non est enim vitium in
            oratione solum, sed etiam in moribus. Nihil minus, contraque illa
            hereditate dives ob eamque rem laetus. Paulum, cum regem Persem
            captum adduceret, eodem flumine invectio?
          </Paragraph>{" "}
        </>
      }
    />
  </main>
);

export default App;
