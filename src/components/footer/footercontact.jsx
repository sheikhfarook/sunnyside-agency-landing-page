// desktop device images
import milkbottle from "../../assets/desktop/image-gallery-milkbottles.jpg";
import orageplate from "../../assets/desktop/image-gallery-orange.jpg";
import cone from "../../assets/desktop/image-gallery-cone.jpg";
import sugarcube from "../../assets/desktop/image-gallery-sugarcubes.jpg";

//mobile device images
// import milkbottles from "../../assets/mobile/image-gallery-milkbottles.jpg";
import milkbottles from "../../assets/mobile/image-gallery-milkbottles.jpg";
import orageplates from "../../assets/mobile/image-gallery-orange.jpg";
import cones from "../../assets/mobile/image-gallery-cone.jpg";
import sugarcubes from "../../assets/mobile/image-gallery-sugar-cubes.jpg";

// all device images
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import logo from "../../assets/logo-copy.svg";

const FooterContact = () => {
  return (
    <div className="mt-[10rem] max-sm:mt-[5rem]">
      <div className="grid grid-cols-4 max-sm:grid-cols-2">
        <div>
          <img className="max-sm:hidden" src={milkbottle} alt="" />
          <img className="md:hidden" src={milkbottles} alt="" />
        </div>
        <div>
          <img className="max-sm:hidden" src={orageplate} alt="" />
          <img className="md:hidden" src={orageplates} alt="" />
        </div>
        <div>
          <img className="max-sm:hidden" src={cone} alt="" />
          <img className="md:hidden" src={cones} alt="" />
        </div>
        <div>
          <img className="max-sm:hidden" src={sugarcube} alt="" />
          <img className="md:hidden" src={sugarcubes} alt="" />
        </div>
      </div>
      <div className="bg-[#90d4c6] text-center  space-y-10 py-14">
        <div className="">
          <img className="m-auto text-[#2c7566]" src={logo} alt="" />
        </div>
        <div className="flex gap-10 m-auto text-[18px] justify-center text-[#458d7e] font-[600] leading-[25px] tracking-[-0.12857144px] font-barlow ">
          <div className=" hover:text-[#FFF]">About</div>
          <div className=" hover:text-[#FFF]">Services</div>
          <div className=" hover:text-[#FFF]">Project</div>
        </div>
        <div className="flex gap-5 m-auto justify-center">
          <div>
            <img className=" " src={facebook} alt="" />
          </div>
          <div>
            <img src={instagram} alt="" />
          </div>
          <div>
            <img src={twitter} alt="" />
          </div>
          <div>
            <img src={pinterest} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
