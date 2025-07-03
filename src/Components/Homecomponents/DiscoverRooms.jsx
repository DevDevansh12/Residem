import { useState } from "react";
import Livingroom from "../../assets/Living Room.jpg";
import Kitchen from "../../assets/Kitchen.jpg";
import Bedroom from "../../assets/Bedroom.jpg";
import Bathroom from "../../assets/Bathroom.jpg";
import Diningroom from "../../assets/Dining Room.jpg";

const rooms = {
  "Living Room": {
    description:
      "A cozy, social hub with plush seating and entertainment. Ideal for relaxing, gatherings, and family time.",
    area: "20 m²",
    image: Livingroom,
  },
  "Dining Room": {
    description:
      "A space designed for meals and conversation. Perfect for dinners and hosting guests.",
    area: "15 m²",
    image: Diningroom,
  },
  Kitchen: {
    description:
      "The heart of the home where meals are created. Equipped with modern appliances and ample storage.",
    area: "18 m²",
    image: Kitchen,
  },
  "Master Bedroom": {
    description:
      "A private retreat with a comfortable bed and elegant decor. Ideal for relaxation and sleep.",
    area: "25 m²",
    image: Bedroom,
  },
  Bathroom: {
    description:
      "A clean and serene space for personal care. Features include a shower, vanity, and storage.",
    area: "10 m²",
    image: Bathroom,
  },
};

export default function DiscoverRooms() {
  const [activeRoom, setActiveRoom] = useState("Living Room");

  return (
    <div className="min-h-screen bg-[#0D3B3C] text-white px-6 py-12 font-sans">
      <div className="text-center mb-8">
        <div className="text-sm bg-white text-black inline-block px-4 py-1 rounded-full font-medium mb-2">
          Room Details
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold">Discover Rooms</h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(rooms).map((room) => (
          <button
            key={room}
            onClick={() => setActiveRoom(room)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeRoom === room
                ? "bg-[#B98352] text-white"
                : "bg-[#174B4C] text-gray-300 hover:bg-[#225e5f]"
            }`}
          >
            {room}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Text Box */}
        <div className="bg-[#114142] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">{activeRoom}</h2>
          <p className="text-gray-300">{rooms[activeRoom].description}</p>
        </div>

        {/* Image Box */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={rooms[activeRoom].image}
            alt={activeRoom}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-[#574032] text-white px-4 py-2 rounded-full text-sm">
            {rooms[activeRoom].area}
          </div>
        </div>
      </div>
    </div>
  );
}
