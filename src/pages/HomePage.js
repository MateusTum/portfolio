import React from "react";
import PresentationSection from "../components/0-Presentation/PresentationSection";
import AboutSection from "../components/1-About/AboutSection";
import PortfolioSection from "../components/2-Portfolio/PortfolioSection";
// import ConceptsSection from "../components/3-Concepts/ConceptsSection";

const Home = () => {
  return (
    <>
      <PresentationSection />
      <AboutSection />
      <PortfolioSection />
      {/* <ConceptsSection /> */}
    </>
  );
};

export default Home;