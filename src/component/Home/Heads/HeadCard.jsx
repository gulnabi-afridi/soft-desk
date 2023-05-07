import React from "react";
import Image from "next/image";

function HeadCard() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="w-[200px] h-[200px] flex justify-center items-center bg-brand-main rounded-full overflow-hidden">
        {/* =====> image */}
        <div className="w-[200px] h-[200px] relative">
          <Image
            src="/Assets/profile.png"
            fill
            alt="heads"
            className="cover"
          ></Image>
        </div>
      </div>
      {/* ======> name */}
      <p className="text-[26px] text-white-main font-poppins font-semibold">
        Member name
      </p>
      <p className="text-[16px] text-white-main font-poppins ">Member status</p>
    </div>
  );
}

export default HeadCard;
