import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <div className="px-4 py-8 md:px-10 md:py-10 lg:px-[120px] lg:py-120px">
      <div className="bg-[#0058FF] p-4 md:p-10 lg:p-20 rounded-3xl">
        <h1 className="text-2xl lg:text-5xl md:text-[32px] font-bold text-center text-white mb-4 md:mb-6 lg:mb-8">
          Get In Touch
        </h1>
        <p className="text-sm lg:text-lg text-center text-white mb-4 md:mb-6 lg:mb-8">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project <br className="hidden md:block lg:hidden" /> that requires support, or a <br className="hidden lg:block" /> domestic
          plumbing task that needs the attention of a trusted professional.
        </p>
        <div className="flex justify-center">
          <button className="text-[#0058FF] text-sm md:text-base font-bold md:py-4 py-[10px] px-5 md:px-6 bg-white rounded-lg flex items-center">
            Book a Professional Plumber <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
