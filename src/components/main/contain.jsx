import egg from "../..//assets/desktop/image-transform.jpg";
import juiceGlass from "../../assets/desktop/image-stand-out.jpg";
import cherry from "../../assets/desktop/image-graphic-design.jpg";
import orange from "../../assets/desktop/image-photography.jpg";

import egg1 from "../../assets/mobile/image-transform.jpg";
import juiceGlass1 from "../../assets/mobile/image-stand-out.jpg";
import cherry1 from "../../assets/mobile/image-graphic-design.jpg";
import orange1 from "../../assets/mobile/image-photography.jpg";

// import { taskdata } from "./data/data";

const Contain = () => {
  return (
    <div className="max-sm:mt-[8.1rem] md:mt-[7rem] lg:mt-[11.2rem] xl:mt-[20.32rem] 2xl:mt-[56.7rem] 2xl:mx-[9rem] ">
      {/* brand */}
      <div className="flex max-sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
        <div className="items-center m-auto max-sm:text-center max-sm:my-20 md:w-[50%] md:text-center">
          <div
            className="w-[445px] h-[285px] space-y-10 m-auto 
          max-sm:w-[327px] max-sm:h-[309px] ">
            <div
              className="w-full h-[98.64px] text-[#24303e] font-fraunces 
            text-[40px] font-[900] tracking-[-0.2857143px]
            max-sm:h-[78.91px] max-sm:text-[32px] max-sm:tracking-[-0.22857143px] ">
              Transform your brand
            </div>
            <div
              className="w-full h-[90px] text-[#808397] font-barlow text-[18px] 
            font-[600] leading-[30px] tracking-[-0.12857144px]
            max-sm:h-[150px]">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </div>
            <div>
              <div
                className="w-[120px] h-[25px] text-[#24303e] font-fraunces
               text-[15px] font-[900] leading-[25px] uppercase tracking-[1px] 
               ml-2 max-sm:m-auto md:m-auto">
                Learn More
              </div>
              <div
                className="opacity-[0.25] w-[137px] h-[10px] rounded-[28px] 
              bg-[#fad400] mt-[-0.5rem]  max-sm:mt-[-0.6rem] max-sm:m-auto md:mt-[-0.6rem] md:m-auto"></div>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[100%] h-[600px] max-sm:hidden" src={egg} alt="" />
          <img className="w-[100%] h-[312px] md:hidden" src={egg1} alt="" />
        </div>
      </div>
      {/* audience */}
      <div className="flex max-sm:flex-col md:flex-col md:mt-10 lg:flex-row lg:mt-0">
        <div>
          <img
            className="w-[100%] h-[600px] max-sm:hidden"
            src={juiceGlass}
            alt=""
          />
          <img
            className="w-[100%] h-[312px] md:hidden"
            src={juiceGlass1}
            alt=""
          />
        </div>
        <div className="md:w-[50%] items-center  m-auto max-sm:text-center max-sm:my-20 md:text-center ">
          <div className="w-[445px] h-[285px] space-y-10 m-auto max-sm:w-[327px] max-sm:h-[309px] ">
            <div
              className="w-full h-[98.64px] text-[#24303e] font-fraunces text-[40px] font-[900] tracking-[-0.2857143px]
            max-sm:h-[78.91px] max-sm:text-[32px] max-sm:tracking-[-0.22857143px]">
              Stand out to the right audience
            </div>
            <div
              className="w-full h-[90px] text-[#808397] font-barlow text-[18px]
             font-[600] leading-[30px] tracking-[-0.12857144px]
            max-sm:h-[150px]">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </div>
            <div>
              <div
                className="w-[120px] h-[25px] text-[#24303e] font-fraunces text-[15px]
               font-[900] leading-[25px] uppercase tracking-[1px] ml-2
               max-sm:m-auto md:m-auto">
                Learn More
              </div>
              <div
                className="opacity-[0.25] w-[137px] h-[10px] rounded-[28px] 
              bg-[#fe7766] mt-[-0.5rem] max-sm:mt-[-0.6rem] max-sm:m-auto md:m-auto md:mt-[-0.6rem]"></div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      {/* xl:mt-10 */}
      <div className="flex max-sm:flex-col 2xl:justify-between">
        {/* cherry */}
        <div>
          <div>
            <img className="  max-sm:hidden  w-[100%] " src={cherry} alt="" />
            <img
              className="w-[100%] h-[600px] md:hidden"
              src={cherry1}
              alt=""
            />
          </div>
          <div className="mt-[-13rem] mb-[10rem] max-sm:mb-[4.05rem] ">
            <div className="w-[339px] h-[143px] text-center m-auto space-y-7">
              <div
                className="w-[221px] h-[35px] text-[#24554a] font-fraunces text-[28px] font-[900]
               m-auto tracking-[-0.2px] md:mt-12">
                Graphic Design
              </div>
              <div className="w-[339px] h-[81px] text-[#3e7467] font-barlow text-[16px] font-[600] leading-[27px] tracking-[-0.114285715px] ">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </div>
            </div>
          </div>
        </div>
        {/* orange */}
        <div>
          <div>
            <img className="w-[100%] max-sm:hidden" src={orange} alt="" />
            <img
              className="w-[100%] h-[600px] md:hidden"
              src={orange1}
              alt=""
            />
          </div>
          <div className="mt-[-13rem] mb-[10rem]">
            <div className="w-[339px] h-[143px] text-center m-auto space-y-7">
              <div
                className="w-[221px] h-[35px] text-[#24554a] font-fraunces text-[28px] font-[900] m-auto 
              tracking-[-0.2px] md:mt-12">
                Photography
              </div>
              <div
                className="w-[339px] h-[81px] text-[#3e7467] font-barlow text-[16px] font-[600] 
              leading-[27px] tracking-[-0.114285715px] ">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contain;
{
  /* {taskdata?.map((agency, index) => (
  <div
    className={`cursor-pointer ${index === 0 ? "ml-0" : 0}`}
    key={agency?.id}>
    <div>{agency?.frame.in.title}</div>
    <div>{agency?.frame.in.para}</div>
    <div>{agency?.frame.in.more}</div>
    <div>
      <img
        className="max-sm:hidden"
        src={agency?.frame.desktopimage.profile}
        alt=""
      />
    </div>
    <div className="md:hidden">
      <img src={agency?.profile1} alt="" />
    </div>
  </div>
))} */
}
