import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <div className="px-4 py-8 md:px-10 md:py-10 lg:px-[120px] lg:py-120px">
      <div className="bg-[#0058FF] p-20 rounded-3xl">
        <h1 className="text-5xl font-bold text-center text-white mb-8">
          Get In Touch
        </h1>
        <p className="text-lg text-center text-white mb-8">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support, or a <br /> domestic
          plumbing task that needs the attention of a trusted professional.
        </p>
        <div className="flex justify-center">
          <button className="text-[#0058FF] font-bold py-4 px-6 bg-white rounded-lg flex items-center">
            Book a Professional Plumber <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
