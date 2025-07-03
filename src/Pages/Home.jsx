import React from "react";
import HeroSection from "../Components/Homecomponents/HeroSection";
import HomeOverviewSection from "../Components/Homecomponents/HomeOverviewSection";
import DiscoverRooms from "../Components/Homecomponents/DiscoverRooms";
import FloorPlans from "../Components/Homecomponents/FloorPlans";
import Gallery from "../Components/Homecomponents/Gallery";
import ScheduleVisit from "../Components/ScheduleVisit";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeOverviewSection />
      <DiscoverRooms />
      <Gallery />
      <FloorPlans />
      <ScheduleVisit />
    </div>
  );
};

export default Home;
