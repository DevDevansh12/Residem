import React, { useEffect, useState } from "react";
import axios from "axios";
import BgImage from "../../assets/Homebanner.png";

const HeroSection = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/home")
      .then((res) => setHomeData(res.data))
      .catch((err) => console.error("Error fetching home data:", err));
  }, []);

  if (!homeData) return null;

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-0"></div>

      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 md:px-8 py-10 flex flex-col justify-between">
        <div className="flex flex-col justify-center md:justify-between md:flex-row h-full gap-10 w-full">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
            <h1 className="font-jost text-white text-5xl sm:text-5xl md:text-6xl lg:text-5xl font-medium leading-tight text-left">
              {homeData.headline?.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  {word}{" "}
                  {(index + 1) % 3 === 0 && <br className="block md:hidden" />}
                </React.Fragment>
              ))}
            </h1>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center md:items-end items-start gap-4">
            <p className="text-white text-base sm:text-md md:text-xl">
              {homeData.address}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-white bg-opacity-10 text-white border border-white px-4 py-2 rounded-md backdrop-blur-sm hover:bg-white hover:text-black transition w-full sm:w-auto">
                SCHEDULE A VISIT
              </button>
              <button className="bg-white bg-opacity-10 text-white border border-white px-4 py-2 rounded-md backdrop-blur-sm hover:bg-white hover:text-black transition w-full sm:w-auto">
                EXPLORE PROPERTY
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-10 text-white text-sm sm:text-base">
          {homeData.features?.map((feature, index) => (
            <span key={index}>{feature}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
