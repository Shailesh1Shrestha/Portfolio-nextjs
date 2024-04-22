"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ">
     <div className="flex gap-14">
         
         <div className="">
           <li>HTML/CSS</li>
           <li>JavaScript</li>
           <li>React</li>
           <li>Java</li>
         </div>
         <div>
             <li>TailwindCSS</li>
             <li>Bootstrap</li>
             <li>Figma</li>
             <li>UI/UX Design</li>
         </div>
     </div>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor in Computer Application, Tribhuvan University, Nepal</li>
        <li>+2 Management, National Examination Board, Nepal</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white mt-5 mb-5" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/img1.jpg" alt="alt" width={500} height={400} className=" shadow-purple-500 rounded-2xl shadow-lg"/>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <div className = "text-headingColor text-center mb-20">
        <p className='text-xl font-semibold mb-5'>About</p>
        <h2 className='md:text-5xl text-4xl font-bold'>About Me</h2>
        
      </div>
          <p className="text-base lg:text-lg text-justify">
            A dedicated computer science student with a fervent passion for
            frontend development. Throughout my academic journey, I've delved
            deep into courses focused on web development and UI/UX design,
            honing my skills in HTML, CSS, JavaScript, and popular frontend
            frameworks like React.js. I've also had the privilege to work on
            various projects, where I've gained hands-on experience in
            translating design concepts into functional and visually appealing
            websites and applications.Beyond coding, I'm driven by the prospect
            of solving real-world problems and making a meaningful impact
            through my work. As I embark on my journey as a frontend developer,
            my goal is to continue learning, growing, and contributing to
            innovative projects that push the boundaries of web technology.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
