import { ReactNode } from "react";

interface FullWidthSectionProps {
  children: ReactNode;
}

const FullWidthSection = ({ children }: FullWidthSectionProps) => {
  return (
    <section
      style={{ width: "100%", padding: "2rem 0", backgroundColor: "#f9f9f9" }}
    >
      {children}
    </section>
  );
};

export default FullWidthSection;
