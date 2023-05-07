import React from "react";
import HeadCard from "./HeadCard";

function Heads() {
  return (
    <div className="w-full bg-black-main py-8 md:py-16 px-4 lg:px-10">
      <div className="w-full max-w-[1280px] m-auto flex flex-col justify-center items-center">
        <h1 className="text-[46px] sm:text-[56px] text-white-main font-poppins font-semibold">
          Heads
        </h1>
        {/* =====> head memeber */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 justify-center items-center">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((head, index) => {
            return <HeadCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Heads;
