import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutData = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3, // Animate when 30% of section is visible
  });

  const stats = [
    { value: 25000, label: "Square Areas" },
    { value: 150, label: "Luxurious Unit" },
    { value: 300, label: "Parking Spaces" },
    { value: 20, label: "Public Facilities" },
  ];

  return (
    <section
      ref={ref}
      className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-jost"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <p className="text-5xl font-medium text-black">
              {inView ? (
                <CountUp end={item.value} duration={2} separator="," />
              ) : (
                "0"
              )}
            </p>
            <p className="text-sm text-gray-500 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutData;
