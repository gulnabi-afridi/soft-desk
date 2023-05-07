import React from "react";
import Image from "next/image";

function Advisor() {
  return (
    <div className="w-full bg-black-main flex justify-center items-center py-8 md:py-16 px-4 lg:px-10">
      <div className="w-full max-w-[1280px] m-auto flex  flex-col justify-center items-center">
        <h1 className="text-[46px] sm:text-[56px] text-center md:text-start leading-[60px] text-brand-main font-poppins font-semibold">
          Meet the Advisor
        </h1>
        <div className="w-full flex lg:flex-row flex-col gap-10 xl:gap-24 justify-center items-center mt-10">
          {/* ======> Advisor image */}
          <div className="w-full md:w-[500px] h-[300px] sm:h-[600px] flex justify-center items-center bg-brand-main">
            <div className="w-full md:w-[700px] h-[300px] sm:h-[590px] relative mt-[5px] sm:mt-[10px]">
              <Image
                src="/Assets/profile.png"
                fill
                className="cover"
                alt="advisor"
              ></Image>
            </div>
          </div>
          {/* =======> Advisor detail */}
          <div className="flex flex-col gap-4 justify-center items-start">
            <p className="text-[30px] text-brand-main font-poppins leading-8 font-semibold">
              Meet the softdesk <br /> Advisor
            </p>
            <p className="text-[16px] font-normal font-poppins leading-6 text-white-main">
              Another area of technical optimization is structured data (a.k.a.,
              schema). Adding this code to your website can help search engines
              better understand your content and enhance your appearance in the
              search results. Plus, web hosting services, CMS (content
              management system) and site security all play a role in SEO.
            </p>
            <div className="flex flex-col gap-1 sm:gap-2">
              <p className="text-[30px] font-semibold font-poppins text-brand-main">
                Dr. Ali Javed
              </p>
              <p className="text-[16px] font-normal text-brand-main font-poppins">
                Advisor
              </p>
              <p className="text-[16px] font-normal text-brand-main font-poppins">
                SoftDesk, UET Taxila
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advisor;
