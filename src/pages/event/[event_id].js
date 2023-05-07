import React from "react";
import Router, { useRouter } from "next/router";
import { getEventById } from "../../../Data/data";
import Image from "next/image";

function Event() {
  const Router = useRouter();
  const evedId = Router.query.event_id;
  const FilterEvent = getEventById(evedId);

  if (!FilterEvent) {
    return <h1>Loading ......</h1>;
  }

  return (
    <div className="w-full max-w-[1280px] flex flex-col gap-8 m-auto justify-center items-center lg:px-[10px] px-4 py-8 md:py-14">
      {/* ======> event title*/}
      <p className="text-[40px] font-poppins font-semibold text-white-main">
        {FilterEvent.title}
      </p>
      {/* ======> event video */}
      <div className="w-[100%] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] relative">
        <Image src={FilterEvent.img} className="cover" fill></Image>
      </div>
      {/* ========> event description */}
      <p className="text-[18px] font-poppins text-white-main">
        {FilterEvent.description}
      </p>
    </div>
  );
}

export default Event;
