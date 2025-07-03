import React from "react";
import HeroAbout from "../Components/Aboutcomponents/HeroAbout";
import Banner from "../Components/Aboutcomponents/Banner";
import AboutData from "../Components/Aboutcomponents/AboutData";
import OurTeam from "../Components/Aboutcomponents/OurTeam";

const About = () => {
  return (
    <div>
      <HeroAbout />
      <Banner />
      <AboutData />
      <OurTeam />
    </div>
  );
};

export default About;
