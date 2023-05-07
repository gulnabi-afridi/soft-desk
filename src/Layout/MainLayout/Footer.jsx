import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Data } from "../../../Data/data";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="w-full">
      <div className="w-full m-auto max-w-[1200px] flex flex-col gap-10 justify-center items-center py-16 px-4 lg:px-[10px]">
        {/* =====> footer content */}
        {/* =======> logo */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[150px] h-[150px] relative text-white-main text-semibold font-semibold">
            <Image src="/Assets/logo.png" fill className="object-cover"></Image>
          </div>
        </div>
        {/* =====> Address + socila links */}
        {/* => location */}
        <div className="w-full flex gap-2 justify-center items-center -mt-4">
          <MdLocationOn className="text-[36px] sm:text-[28px] text-brand-main" />
          <p className="text-[16px] sm:text-[18px] md:text-[22px] text-white-main font-poppins">
            University of Engineeing and Tecnplogy, Taxila
          </p>
        </div>
        {/* =====> social links */}

        <div className="flex justify-center items-center gap-8">
          <BsInstagram className="text-[50px] sm:text-[50px] text-brand-main cursor-pointer hover:scale-110 duration-300" />
          <AiFillLinkedin className="text-[50px] sm:text-[50px] text-brand-main cursor-pointer hover:scale-110 duration-300" />
          <BsFacebook className="text-[50px] sm:text-[50px] text-brand-main cursor-pointer hover:scale-110 duration-300" />
        </div>
        {/* =====> navigation links */}
        <div className="w-full flex  flex-wrap justify-center items-center gap-y-1 gap-4 md:gap-6">
          {Data.navibar.map((navi, index) => {
            return (
              <Link
                key={index}
                to={navi.path}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={800}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                className="text-[16px] md:text-[20px] text-brand-main font-poppins relative after:absolute after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:h-[2px] after:bg-brand-main after:duration-200"
              >
                {navi.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
