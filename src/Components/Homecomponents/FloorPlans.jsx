import React from "react";
import img from "../../assets/floorplan-2-color.png";
const rooms = [
  { name: "Living Room", size: "20 m²" },
  { name: "Dining Room", size: "15 m²" },
  { name: "Kitchen", size: "15 m²" },
  { name: "Master Bedroom", size: "16 m²" },
  { name: "Kids Bedroom 1", size: "12 m²" },
  { name: "Kids Bedroom 2", size: "12 m²" },
  { name: "Bath Room", size: "6 m²" },
  { name: "Garage", size: "40 m²" },
  { name: "Warehouse", size: "4 m²" },
];

const FloorPlans = () => {
  return (
    <div className="bg-[#0a3a34] text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <button className="text-xs uppercase bg-white text-[#0a3a34] px-3 py-1 rounded mb-4">
            Discover
          </button>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Home Floorplans
          </h2>
          <p className="text-gray-300 mb-6">
            Dolor ed consectetur dolore incididunt pariatur aliqua ut laborum
            aliquip eiusmod officia tempor ex commodo amet voluptate.
          </p>
          <ul className="space-y-2">
            {rooms.map((room, index) => (
              <li
                key={index}
                className="flex justify-between border border-gray-600 px-4 py-2 rounded"
              >
                <span>{room.name}</span>
                <span className="font-semibold">{room.size}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="w-full">
          <img
            src={img}
            alt="Floorplan"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-[#0f4d42] p-6 rounded-lg">
          <p className="text-sm uppercase text-gray-300">Size</p>
          <h3 className="text-xl font-semibold mt-2">1666 sqft</h3>
        </div>
        <div className="bg-[#0f4d42] p-6 rounded-lg">
          <p className="text-sm uppercase text-gray-300">Beds</p>
          <h3 className="text-xl font-semibold mt-2">5</h3>
        </div>
        <div className="bg-[#0f4d42] p-6 rounded-lg">
          <p className="text-sm uppercase text-gray-300">Baths</p>
          <h3 className="text-xl font-semibold mt-2">5</h3>
        </div>
        <div className="bg-[#0f4d42] p-6 rounded-lg">
          <p className="text-sm uppercase text-gray-300">Parking Slots</p>
          <h3 className="text-xl font-semibold mt-2">5</h3>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
