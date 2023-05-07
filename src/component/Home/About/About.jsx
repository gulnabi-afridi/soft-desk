import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full py-8 sm:py-16 bg-white-main">
      <div className="w-full max-w-[1280px] m-auto flex justify-center items-center flex-col px-4 lg:px-[10px]">
        <p className="text-[46px] sm:text-[56px] text-black-main font-semibold">
          About us
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:grid-cols-3 mt-12">
          {/* =====> introduction */}
          <Link
            href="/introduction"
            className="w-full flex justify-center items-center"
          >
            <div className="flex w-full max-w-[280px] h-[280px] flex-col justify-center items-center hover:scale-110 duration-300 cursor-pointer hover:border-[3px] hover:border-brand-main gap-6 bg-[#e2e0e0] rounded-full">
              <div className="w-[110px] h-[110px] relative">
                <Image
                  src="/Assets/about/introduction.png"
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>
              <p className="text-[26px] font-semibold text-black-main">
                Introduction
              </p>
            </div>
          </Link>
          {/* =======> about */}
          <div className="w-full flex justify-center items-center">
            <Link
              href="/about"
              className="flex w-full max-w-[280px] h-[280px] flex-col justify-center items-center hover:scale-110 duration-300 hover:border-[3px] hover:border-brand-main cursor-pointer gap-6 bg-[#e2e0e0] rounded-full"
            >
              <div className="w-[110px] h-[110px] relative">
                <Image
                  src="/Assets/about/about.svg"
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>
              <p className="text-[26px] font-semibold text-black-main">
                About us
              </p>
            </Link>
          </div>

          {/* =======> objective */}
          <div className="w-full flex justify-center items-center">
            <Link
              href="/objective"
              className="flex w-full max-w-[280px] h-[280px] flex-col justify-center items-center hover:scale-110 duration-300 hover:border-[3px] hover:border-brand-main cursor-pointer gap-6 bg-[#e2e0e0] rounded-full"
            >
              <div className="w-[120px] h-[120px] relative">
                <Image
                  src="/Assets/about/objective.svg"
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>
              <p className="text-[26px] font-semibold text-black-main">
                Objective
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
