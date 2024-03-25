"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Calx Signature Generator",
    description: "Projet 1 - Formulaire à remplir permettant de générer une signature pour les mails professionnel pour Calx",
    image: "/images/calxsignature.png",
    tag: ["Front-end", "Tout"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Générer un powerpoint",
    description: "Projet 2 - Génerer un powerpoint à partir du code pour Calx",
    image: "/images/powerpointcalx.png",
    tag: ["Back-end", "Tout"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Générer Word",
    description: "Projet 3 - Générer un document Word à partir du code",
    image: "/images/word.jpg",
    tag: ["Back-end", "Tout"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Projet 4 - Rendu du projet 1 sur Electronsjs",
    image: "/images/electronjs.jpg",
    tag: ["Back-end", "Tout"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Projet Symfony",
    description: "Projet 5 - Mediatek Formation atelier 1",
    image: "/images/contexteImg.jpg",
    tag: ["Full-stack", "Tout"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Projet C# et API REST",
    description: "Projet 6 - Mediatel Documents",
    image: "/images/contexteImg.jpg",
    tag: ["Full-stack", "Tout"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Tout");
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
          onClick={handleTagChange}
          name="Tout"
          isSelected={tag === "Tout"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front-end"
          isSelected={tag === "Front-end"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back-end"
          isSelected={tag === "Back-end"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full-stack"
          isSelected={tag === "Full-stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
