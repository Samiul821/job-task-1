import React from "react";

const FAQ = () => {
  return (
    <div className="py-8 md:py-10 lg:py-[120px]">
      <div className="mb-8 md:mb-10 lg:mb-[120px]">
        <h1 className="text-center text-2xl font-bold md:text-[32px] lg:text-5xl">
          Frequently asked questions
        </h1>
      </div>

      {/* Center Content */}
      <div className="flex justify-center">
        <div className="join join-vertical w-full max-w-[920px]">
          <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold md:text-xl lg:text-[28px] text-[#1B1743]">
              Do plumbers deal with heating?
            </div>
            <div className="collapse-content text-sm lg:text-lg text-[#2A2F32]">
              Some of our local plumbers are also gas registered and experienced
              working on heating systems, bathrooms and kitchens.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold md:text-xl lg:text-[28px] text-[#1B1743]">
              Do you charge a call out fee?
            </div>
            <div className="collapse-content text-sm lg:text-lg text-[#2A2F32]">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold md:text-xl lg:text-[28px] text-[#1B1743]">
              How quickly can your company send out an engineer?
            </div>
            <div className="collapse-content text-sm lg:text-lg text-[#2A2F32]">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border-b-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold md:text-xl lg:text-[28px] text-[#1B1743]">
              What should I do if I get a water leak?
            </div>
            <div className="collapse-content text-sm lg:text-lg text-[#2A2F32]">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
