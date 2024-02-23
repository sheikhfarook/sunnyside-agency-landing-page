// desktop device
import headerimg from "../../assets/desktop/image-header.jpg";

// mobile device
import mobileheaderimg from "../../assets/mobile/image-header.jpg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // Button,
  // MenuItemOption,
  // MenuGroup,
  // MenuOptionGroup,
  // MenuDivider,
} from "@chakra-ui/react";
import hamburger from "../../assets/icon-hamburger.svg";

// all device
import arrow from "../../assets/icon-arrow-down.svg";
import sunny from "../../assets/logo.svg";
import App from "./../../App";
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
        <div className="2xl:w-[90rem] 2xl:m-auto xl:w-[1352px] flex max-sm:justify-between ">
          <div className="w-[170px] max-sm:w-[123.64px]">
            <img src={sunny} alt="" />
          </div>
          {/* menu */}
          <div className="">
            <Menu>
              <MenuButton>
                <img src={hamburger} alt="" />
              </MenuButton>
              <div className="text-center ">
                {/* <div
                  className=" w-2 border-l-[34px] border-white border-t-[29px] 
          border-l-transparent border-r-transparentmd:mt-3 max-sm:ml-0 max-sm:mt-0 
          max-md:ml-[131px] max-md:mt-3 md:mt-[1rem] md:ml-[131px] lg:mt-3 lg:ml-[131px] "></div> */}
                <MenuList
                  minWidth="20rem"
                  minHeight="18rem"
                  marginTop="3rem"
                  borderRadius="none">
                  <MenuItem>
                    <div
                      className="w-2 border-white border-b-[30px] border-l-[30px]
                    border-l-transparent mt-[-59px]  absolute right-0               "></div>
                  </MenuItem>
                  <MenuItem>
                    <div className="text-[20px] font-[600] font-barlow text-[#808397] tracking-[-0.14285715px] leading-[25px] m-auto mt-4">
                      About
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="text-[20px] font-[600] font-barlow text-[#808397] tracking-[-0.14285715px] leading-[25px] text-center m-auto my-3">
                      Services
                    </div>
                  </MenuItem>
                  <div className="my-3 text-[20px] font-[600] font-barlow text-[#808397] tracking-[-0.14285715px] leading-[25px]">
                    Projects
                  </div>
                  <MenuItem>
                    <div
                      className=" rounded-[28px] bg-[#fbd600] text-[#000]
                     text-[15px] font-[700] uppercase text-center font-fraunces 
                     items-center py-3.5 w-[140px] h-[56px] m-auto my-3">
                      contact
                    </div>
                  </MenuItem>
                </MenuList>
              </div>
            </Menu>
          </div>
          {/*  */}
          <div
            className=" w-[100%] h-[25px] justify-end font-barlow flex  text-[#FFF]
           text-[18px] font-[600] leading-[25px] tracking-[-0.12857144px]
           max-sm:hidden lg:gap-10
           md:gap-9">
            <div className="w-[48px] ">About</div>
            <div className="w-[72px] ">Services</div>
            <div className="w-[66px] ">Projects</div>
            <div
              className=" rounded-[28px] bg-[#FFF] text-[#000]
              text-[15px] font-[700] uppercase text-center font-fraunces 
               items-center hover:bg-[#65c7fc] hover:text-[#FFF]
               md:w-[120px] md:h-[40px] md:py-2 md:mt-[-5px] lg:w-[130px] lg:h-[50px] lg:py-3 lg:mt-[-9px] xl:mt-[-10px] xl:py-3.5
               xl:w-[140px] xl:h-[56px]">
              contact
            </div>
          </div>
        </div>
        {/* middle  */}
        <div
          className="text-center mt-[5rem]  max-sm:space-y-[4.5rem] max-sm:mt-[3.7rem] 
        lg:space-y-[4rem]  xl:mt-[6rem] xl:space-y-[7.5rem]">
          <div
            className=" h-[69px]  text-[#FFF] 
          font-[900] uppercase tracking-[8.75px] m-auto font-fraunces 
          max-sm:w-[327px] max-sm:h-[98.64px] max-sm:text-[40px] max-sm:text-center max-sm:tracking-[6.25px]
          md:text-[30px] lg:text-[40px] xl:text-[56px] lg:w-[753px]
          ">
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
