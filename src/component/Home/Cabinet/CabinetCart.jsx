import React from "react";
import Image from "next/image";

function CabinetCart() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="w-[300px] h-[300px] flex justify-center items-center bg-brand-main rounded-full overflow-hidden">
        {/* =====> image */}
        <div className="w-[300px] h-[320px] relative">
          <Image src="/Assets/profile.png" fill alt="cabinets" className=""></Image>
        </div>
      </div>
      {/* ======> name */}
      <p className="text-[26px] text-black-main font-poppins font-semibold">
        Member name
      </p>
      <p className="text-[16px] text-black-main font-poppins ">Member status</p>
    </div>
  );
}

export default CabinetCart;
