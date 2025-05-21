import React from "react";
import { Home, Sun, Snowflake, ShieldCheck } from "lucide-react";

const HomeOverviewSection = () => {
  const features = [
    {
      icon: <Home className="w-10 h-10 text-[#B07E50]" />,
      title: "Smart Home System",
      description:
        "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
    },
    {
      icon: <Sun className="w-10 h-10 text-[#B07E50]" />,
      title: "Solar Energy Panels",
      description:
        "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
    },
    {
      icon: <Snowflake className="w-10 h-10 text-[#B07E50]" />,
      title: "Central Air Conditioning",
      description:
        "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#B07E50]" />,
      title: "Home Security System",
      description:
        "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <span className="inline-block bg-gray-100 text-sm px-3 py-1 rounded">
            Home Overview
          </span>
          <h1 className="text-4xl md:text-5xl text-black mt-6">
            Luxury living where <br className="hidden md:block" />
            comfort meets timeless <br className="hidden md:block" />
            style, effortlessly
          </h1>

          <p className="text-gray-500 mt-4 text-base">
            Non anim in pariatur in ex excepteur commodo do officia amet{" "}
            <br className="hidden md:block" />
            incididunt ullamco nostrud aliquip minim magna esse dolore..
          </p>

          <button className="bg-[#B07E50] text-white px-6 py-2 mt-6 rounded-md uppercase tracking-wider font-medium text-sm hover:bg-[#916547] transition-colors duration-300">
            SCHEDULE A VISIT
          </button>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mt-8 md:mt-0">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              {feature.icon}

              <h3 className="text-lg font-medium text-black mt-3">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOverviewSection;
