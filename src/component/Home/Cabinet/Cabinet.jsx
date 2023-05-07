import React from "react";
import CabinetCart from "./CabinetCart";

function Cabinet() {
  return (
    <div id="cabinet" className="w-full bg-white-main py-8 md:py-16 px-4 lg:px-10">
      <div className="w-full max-w-[1280px] m-auto flex flex-col justify-center items-center">
        <h1 className="text-[46px] sm:text-[56px] text-black-main font-poppins font-semibold">
          Cabinet
        </h1>
        {/* =======> cabinet */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mt-8">
          <div className="grid-cols-1 md:col-span-2 lg:col-span-3">
            <CabinetCart />
          </div>
          <CabinetCart />
          <CabinetCart />
          <CabinetCart />
        </div>
      </div>
    </div>
  );
}

export default Cabinet;
