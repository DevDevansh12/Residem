import React from "react";
import BgImage from "../../assets/Homebanner.png"; // Adjust path if needed

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-0"></div>
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 md:px-8 py-10 flex flex-col justify-between">
        <div className="flex flex-col justify-center md:justify-between md:flex-row h-full gap-10 w-full">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
            <h1 className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold leading-tight text-left">
              Elegant and <br /> Comfort <br className="block md:hidden" />
              in a Modern Space
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center md:items-end items-start gap-4">
            <p className="text-white text-base sm:text-md md:text-xl">
              320 40th Street B4, New York, NY 10019
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
          <span>Spacious Rooms</span>
          <span>Private Garden</span>
          <span>Walk-in Closets</span>
          <span>Swimming Pool</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
