import React from "react";
import Image from "next/image";

function Objective() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1280px] m-auto px-4 lg:px-[10px]">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] relative clipPath">
          <Image
            src="/Assets/about/objective.jpg"
            className="object-cover"
            fill
            alt=""
          />
          {/* =====> overly on image */}
          <div className="w-full h-full absolute top-0 left-0 bg-brand-main/10"></div>
        </div>
        {/* ====> text */}
        <div className="w-full flex flex-col justify-center items-center gap-6 text-white-main text-center mt-6 px-0 md:px-12">
          <p className="text-[36px] sm:text-[46px] font-bold">Objective</p>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[30px]">
            The SoftDesk aims to teach and enhance students' skills in the
            department of programming, designing, and use of technical software
            for various purposes. SoftDesk aims to provide a pathway for
            students to reach the FAANG companies by grooming and mentoring them
            under the supervision of Alumni of UET Taxila and other Pakistani
            diaspora.
          </p>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[30px]">
            Society carries a vision to form small communities within the
            society that shall provide individuals to learn and teach each other
            hence growing together. The SoftDesk has the vision to bring UET
            Taxila into the limelight by sending delegations to national and
            international level technical events and then conducting first of
            its kind a 3 day National Level Technical Events.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Objective;
