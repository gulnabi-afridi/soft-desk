import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1280px] m-auto px-4 lg:px-[10px]">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] relative clipPath">
          <Image
            src="/Assets/about/about.jpg"
            className="object-fill"
            fill
            alt=""
          />
          {/* =====> overly on image */}
          <div className="w-full h-full absolute top-0 left-0 bg-brand-main/10"></div>
        </div>
        {/* ====> text */}
        <div className="w-full flex flex-col justify-center items-center gap-6 text-white-main text-center mt-6 px-0 sm:px-12">
          <p className="text-[36px] sm:text-[46px] font-bold">About Us</p>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[30px]">
            SoftDesk is a student-run society at UET, Taxila that brings
            together IT, software, and other Engineering Students. At SoftDesk,
            we're more than just a society – we're a community of passionate and
            curious students who share a love of technology, innovation, and
            creativity. Whether you're a coding wizard, content creator,
            designing guru, or marketing mastermind, there's a place for you in
            our community.
          </p>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[30px]">
            Our events and activities are designed to inspire and challenge you,
            from coding challenges and hackathons to workshops and guest speaker
            events. We believe that the best ideas come from collaboration and
            teamwork, so we encourage everyone to get involved and work together
            to create something amazing.
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
            Join us today and discover all that SoftDesk has to offer. Together,
            we can unleash our collective creativity and make a positive impact
            on the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
