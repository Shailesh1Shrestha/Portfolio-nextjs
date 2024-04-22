"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Shoes Shop",
    description:
      "This ShoesShop is a react website that consists of Category, Price, Color, Recommendation and Search. It provided the shoes according to the user selection. ",
      image: "/images/project1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Shailesh1Shrestha/ShoesShop",
      previewUrl: "https://shailesh1shrestha.github.io/ShoesShop/"
  },
  {
    id: 2,
    title: "Image Gallery",
    description:
      "This ShoesShop is a react website that consists of image and Search Option. It provided the images according to the user search.",
      image: "/images/project2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Shailesh1Shrestha/Image-Gallery",
      previewUrl: "https://shailesh1shrestha.github.io/Image-Gallery/"

  },
  {
    id: 3,
    title: "Background Changer",
    description:
      "This project is about to change the background color of the page by clicking the color button. It is made by using Tailwind and React JS.",
      image: "/images/project3.jpg",
      tag: ["All"],
      gitUrl: "https://github.com/Shailesh1Shrestha/Background-Changer",
      previewUrl: "/"
  },
  {
    id: 4,
    title: "Password Generator",
    description:
      "This project is about to generate a password by clicking the generate button which includes numberic and characters also. It is made by using Tailwind and React JS.",
      image: "/images/project4.png",
      tag: ["All"],
      gitUrl: "https://github.com/Shailesh1Shrestha/PasswordGenerator",
      previewUrl: "/"
  },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
      <div className = "text-headingColor text-center mb-20">
        <p className='text-xl font-semibold mb-5'>Projects</p>
        <h2 className='md:text-5xl text-4xl font-bold'>My Projects</h2>
        
      </div>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
         
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12  ">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;