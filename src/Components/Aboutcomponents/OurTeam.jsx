import React from "react";
import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";
import Barbara from "../../assets/Team1.png";
import Thomas from "../../assets/Team2.png";
import Madison from "../../assets/Team3.png";
import Joshua from "../../assets/Team4.png";

const teamMembers = [
  {
    name: "Barbara Charline",
    role: "Property Manager",
    image: Barbara,
  },
  {
    name: "Thomas Bennett",
    role: "Leasing Consultant",
    image: Thomas,
  },
  {
    name: "Madison Jane",
    role: "Community Coordinator",
    image: Madison,
  },
  {
    name: "Joshua Henry",
    role: "Maintenance Supervisor",
    image: Joshua,
  },
];

const OurTeam = () => {
  return (
    <section className="bg-[#e8ecec] py-16 px-4 text-center">
      <p className="text-sm text-gray-700 mb-2">Our Team</p>
      <h2 className="text-3xl font-semibold mb-10">Meet the Team</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-[250px] h-[250px] object-cover rounded"
            />
            <h3 className="text-lg font-medium mt-4">{member.name}</h3>
            <p className="text-sm text-gray-700">{member.role}</p>
            <div className="flex gap-3 mt-4">
              <button className="bg-[#f7f4f4] p-2 rounded-md hover:bg-gray-200">
                <FaFacebookF size={16} />
              </button>
              <button className="bg-[#f7f4f4] p-2 rounded-md hover:bg-gray-200">
                <FaTimes size={16} />
              </button>
              <button className="bg-[#f7f4f4] p-2 rounded-md hover:bg-gray-200">
                <FaInstagram size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
