import React from "react";
import img from "../assets/1.png"; // Replace with actual image path
const ScheduleVisit = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-20 text-center">
      <button className="text-xs uppercase bg-gray-200 px-3 py-1 rounded mb-4">
        Contact Us
      </button>
      <h2 className="text-3xl md:text-5xl font-semibold mb-10">
        Schedule a Visit
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left - Agent Info */}
        <div className="flex flex-col items-center gap-4">
          <img src={img} alt="Agent" className="w-60 h-60 object-cover" />
          <div className="text-center">
            <h3 className="text-lg font-semibold">Emily Rodriguez</h3>
            <p className="text-[#c77c45] mt-1">+91 9898989899</p>
          </div>
        </div>

        {/* Right - Form */}
        <form className="space-y-4 text-left">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              defaultValue="2025-06-23"
              className="w-full px-4 py-2 rounded border"
            />
            <input
              type="time"
              defaultValue="10:00"
              className="w-full px-4 py-2 rounded border"
            />
          </div>

          <textarea
            placeholder="Submit Request"
            rows="4"
            className="w-full px-4 py-2 rounded border"
          ></textarea>

          <button
            type="submit"
            className="bg-[#9d6b3f] text-white px-6 py-2 rounded hover:bg-[#7d512d] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleVisit;
