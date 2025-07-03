import React, { useState } from "react";
import img1 from "../../assets/Living Room.jpg";
import img2 from "../../assets/Kitchen.jpg";
import img3 from "../../assets/Bedroom.jpg";
import img4 from "../../assets/Bathroom.jpg";
import img5 from "../../assets/Dining Room.jpg";
import img6 from "../../assets/Homebanner.png";
const categories = ["View All", "Exterior", "Interior", "Facilities"];

const images = [
  {
    url: img1,
    category: "Facilities",
  },
  {
    url: img2,
    category: "Facilities",
  },
  {
    url: img3,
    category: "Facilities",
  },
  {
    url: img4,
    category: "Facilities",
  },
  {
    url: img5,
    category: "Facilities",
  },
  {
    url: img6,
    category: "Facilities",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Facilities");

  const filteredImages =
    activeCategory === "View All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="py-16 px-6 md:px-20 text-center">
      <button className="text-xs uppercase text-gray-800 px-3 py-1 mb-4">
        Discover Gallery
      </button>
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">
        Exterior & Interior
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 border ${
              activeCategory === cat
                ? "bg-[#B07E50] text-white"
                : "text-gray-800 border-transparent hover:border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={img.category}
            className="w-full h-64 object-cover shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
