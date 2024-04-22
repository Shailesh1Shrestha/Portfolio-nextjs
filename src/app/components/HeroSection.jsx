"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-5 mb-5">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white sm:text-5xl  mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Hello, I'm </span> <br />
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Shailesh Shrestha',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'React Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          A passionate Rect Developer and Front End Developer with a knack for crafting beautiful
            and user-friendly digital experience. Based in Kathmandu, Nepal. With
            a background in Computer Science and Information Technology.
          </p>
          <div>

            <a target="_blank" href = "/images/ShaileshCV.pdf"><button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 hover:bg-slate-800 text-white "><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button></a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mb-6 mt-4 lg:mt-0">
          <div className=" rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/homeImg.png"
              alt="alt"
              className="absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 mt-16"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section> 
  );
};

export default HeroSection;
