import React from "react";
import SectionHero from "./SectionHero/SectionHero";
import SectionAbout from "./SectionAbout/SectionAbout";
import SectionStatistics from "./SectionStatistics/SectionStatistics";
import SectionServices from "./SectionServices/SectionServices";
import SectionSkills from "./SectionSkills/SectionSkills";
import SectionResume from "./SectionResume/SectionResume";
// import SectionPortfolio from "./SectionPortfolio/SectionPortfolio";
import SectionContact from "./SectionContact/SectionContact";
// import SectionClients from "./SectionClients/SectionClients";

const Sections = () => {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionStatistics />
      <SectionSkills />
      <SectionResume />
      {/* <SectionPortfolio /> */}
      <SectionContact />
      <SectionServices />
      {/* <SectionClients /> */}
    </>
  );
};

export default Sections;
