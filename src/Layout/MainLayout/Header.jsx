import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { IoMdContact } from "react-icons/io";
import { Data } from "../../../Data/data";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full h-[90px]">
      <div className="w-full h-full max-w-[1280px] m-auto flex justify-between items-center px-4 lg:px-[10px]">
        {/* =====> logo */}
        <div className="flex justify-center items-center text-[30px] text-brand-main font-semibold">
          Logo
        </div>
        {/* ======> Links  */}
        <div className="hidden lg:flex justify-center items-center gap-14">
          {Data.navibar.map((navi, index) => {
            return (
              <>
                {navi.name === "PhotoGallery" ? (
                  <Link
                    href={navi.path}
                    className="text-[22px] cursor-pointer font-normal font-poppins text-brand-main relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-main hover:after:w-full after:duration-200"
                  >
                    {navi.name}
                  </Link>
                ) : (
                  <ScrollLink
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
                    className="text-[22px] cursor-pointer font-normal font-poppins text-brand-main relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-main hover:after:w-full after:duration-200"
                  >
                    {navi.name}
                  </ScrollLink>
                )}
              </>
            );
          })}
          <button className="flex justify-center items-center gap-2 cursor-pointer hover:bg-brand-main border-2 border-brand-main text-[20px] text-brand-main hover:text-black-main w-[185px] py-2 rounded-[30px]">
            <IoMdContact className="text-[28px]" />
            Contact us
          </button>
        </div>
        <div className="lg:hidden w-full flex justify-end items-center ">
          <Hamburger
            className=" text-white-main"
            color="white"
            rounded
            size={34}
            toggled={isOpen}
            toggle={setIsOpen}
          />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="drawer"
          >
            <div className="flex flex-col p-6 justify-center items-center ">
              {/* =========>top bar */}
              <div className="w-full flex justify-end items-center">
                <RxCross2
                  onClick={toggleDrawer}
                  className="text-[60px] text-white-main "
                />
              </div>
              {/* ========> sections links */}
              <div className="flex flex-col justify-center items-center gap-8 mt-16">
                {Data.navibar.map((navi, index) => {
                  return (
                    <Link
                      key={index}
                      onClick={toggleDrawer}
                      href={navi.path}
                      className="font-poppins text-[34px] text-white-main"
                    >
                      {navi.name}
                    </Link>
                  );
                })}
              </div>
              {/* ========> social links */}
              <div className="flex items-center justify-center gap-8 mt-20">
                {mobileSocialLinks.map((navi, index) => {
                  return (
                    <Link
                      href="/"
                      key={index}
                      className="text-white-main text-[50px]"
                    >
                      {navi.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

const mobileSocialLinks = [
  {
    label: <AiFillInstagram />,
  },
  {
    label: <BsFacebook />,
  },
  {
    label: <AiOutlineTwitter />,
  },
];

export default Header;
