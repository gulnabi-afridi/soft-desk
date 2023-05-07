import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { Data } from "../../../Data/data";
import Link from "next/link";

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

        <div className="flex justify-center items-center gap-6 sm:gap-8">
          <BsInstagram className="text-[40px] sm:text-[50px] text-brand-main cursor-pointer hover:scale-110 duration-300" />
          <AiFillLinkedin className="text-[40px] sm:text-[50px] text-brand-main cursor-pointer hover:scale-110 duration-300" />
          <BsFacebook className="text-[40px] sm:text-[50px] text-brand-main cursor-pointer hover:scale-110 duration-300" />
        </div>
        {/* ======> back to home */}
        <Link
          href="/"
          className="text-[22px] sm:text-[26px] text-brand-main w-full flex justify-center items-center gap-2 sm:gap-4"
        >
          <BiArrowBack className="text-brand-main text-[30px] sm:text-[36px] backForAnimation object-contain" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Footer;
