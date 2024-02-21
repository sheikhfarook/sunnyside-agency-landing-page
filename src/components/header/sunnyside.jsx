// desktop device

import headerimg from "../../assets/desktop/image-header.jpg";

// mobile device
import mobileheaderimg from "../../assets/mobile/image-header.jpg";

// all device
import arrow from "../../assets/icon-arrow-down.svg";
import sunny from "../../assets/logo.svg";
const SunnySide = () => {
  return (
    <div>
      {/* img */}
      <div className="">
        <img className="max-sm:hidden w-full " src={headerimg} alt="" />
        <img className="md:hidden" src={mobileheaderimg} alt="" />
      </div>
      {/* header part */}
      <div className="mx-[3%] max-sm:w-[328px] max-sm:mx-auto max-sm:mt-[-132.5%] max-sm:items-center  md:mt-[-52%] ">
        {/* header */}
        <div className="2xl:w-[90rem] xl:w-[1352px] flex ">
          <div className="w-[170px] max-sm:w-[123.64px]">
            <img src={sunny} alt="" />
          </div>
          <div
            className=" w-[100%] h-[25px] justify-end font-barlow flex gap-10 text-[#FFF]
           text-[18px] font-[600] leading-[25px] tracking-[-0.12857144px]
           max-sm:hidden">
            <div className="w-[48px] ">About</div>
            <div className="w-[72px] ">Services</div>
            <div className="w-[66px] ">Projects</div>
            <div
              className="w-[140px] h-[56px] rounded-[28px] bg-[#FFF] text-[#000]
              text-[15px] font-[700] uppercase text-center font-fraunces 
              py-3.5 items-center mt-[-10px]
                hover:bg-[#65c7fc] hover:text-[#FFF]">
              contact
            </div>
          </div>
        </div>
        {/* middle  */}
        <div
          className="text-center mt-[5rem]  max-sm:space-y-[4.5rem] max-sm:mt-[3.7rem] 
        lg:space-y-[4rem]  xl:mt-[6rem] xl:space-y-[7.5rem]">
          <div
            className="w-[753px] h-[69px] text-[56px] text-[#FFF] 
          font-[900] uppercase tracking-[8.75px] m-auto font-fraunces 
          max-sm:w-[327px] max-sm:h-[98.64px] max-sm:text-[40px] max-sm:text-center max-sm:tracking-[6.25px]">
            We are creatives
          </div>
          <div className="">
            <img className="m-auto" src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunnySide;
