import React from "react";
import { ClientData } from "./data/client";

const ClientTestimonials = () => {
  return (
    <div>
      <div
        className="w-[351px] h-[25px] text-[#a7aaad] font-fraunces text-[20px] font-[900]
      text-center tracking-[5px] m-auto uppercase max-sm:w-[281px] max-sm:h-[20px] max-sm:text-[16px] max-sm:tracking-[4px]">
        Client Testimonials
      </div>
      <div className="flex md:gap-20 justify-center max-sm:flex-col max-sm:items-center">
        {ClientData?.map((test) => (
          <div className="mt-20" key={test?.id}>
            <div className="space-y-10">
              <div>
                <img
                  className="w-[72px] h-[72px] rounded-full m-auto  "
                  src={test?.profile}
                  alt=""
                />
              </div>
              <div
                className="w-[350px] h-[96px] text-[#5b636d]  font-barlow text-[18px] 
              font-[600] leading-[32px] text-center tracking-[-0.12857144px]
              max-sm:w-[327px]">
                {test?.para}
              </div>
              <div className=" text-center space-y-2">
                <div className="text-[#24303e] font-fraunces font-[900] tracking-[-0.12857144px] text-[18px]">
                  {test?.name}
                </div>
                <div className="text-[#a7aaad] font-barlow text-[14px] font-[600] leading-[25px] tracking-[-0.1px]">
                  {test?.roll}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
