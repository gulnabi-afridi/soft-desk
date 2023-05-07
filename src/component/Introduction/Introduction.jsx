import React from "react";
import Image from "next/image";

function Introduction() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1280px] m-auto px-4 lg:px-[10px]">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] relative clipPath">
          <Image
            src="/Assets/about/welcome.jpg"
            className="object-fill"
            fill
            alt=""
          />
          {/* =====> overly on image */}
          <div className="w-full h-full absolute top-0 left-0 bg-brand-main/10"></div>
        </div>
        {/* ====> text */}
        <div className="w-full flex flex-col justify-center items-center gap-6 text-white-main mt-6 px-0 text-center md:px-12">
          <p className="text-[36px] sm:text-[46px] font-bold">Introduction</p>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[30px]">
            Welcome to SoftDesk, the premier society for IT, and software
            students at UET Taxila. Our society is made up of passionate
            students from a variety of disciplines, including documentation, IT,
            media, marketing, graphics, and decor. We work together to create a
            vibrant community that fosters innovation, creativity, and
            leadership.
          </p>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[30px]">
            At SoftDesk, we believe that diversity is our strength. That's why
            we offer a wide range of events and activities that cater to both
            technical and non-technical fields. Whether you're interested in
            programming, web development, or app design, or if you're passionate
            about content creation, and decor, our society has something for
            everyone.
          </p>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[30px]">
            Our events and activities include hackathons, coding challenges,
            workshops, and guest speaker events, as well as opportunities to
            work on projects and gain hands-on experience. We also have a strong
            emphasis on teamwork and collaboration, as we believe that these
            skills are essential to success in today's fast-paced and dynamic
            world.
          </p>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[30px]">
            If you're a student at UET Taxila who is looking to enhance your
            skills, expand your network, and make a positive impact, SoftDesk is
            the place for you. Join us today and become part of our dynamic and
            inclusive community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
