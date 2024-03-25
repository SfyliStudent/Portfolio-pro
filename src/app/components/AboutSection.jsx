"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>PHP-Framework Symfony</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Wamp server</li>
        <li>JAVA</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Html</li>
        <li>CSS</li>
        <li>Boostrap</li>
        <li>C#</li>
        <li>Python</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2014-2018 Collège Paul Verlaine aux Mureaux</li>
        <li>2018-2021 Lycée François Villion aux Mureaux</li>
        <li>2021-2022 Université INALCO à Paris</li>
        <li>2022-2024 BTS SIO aux CNED</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>BTS SIO - SLAM : 2024</li>
        <li>Obtention du permis de conduire : juin 2022</li>
        <li>Baccalauréat technologique en science et techniques sanitaire et sociales : 2021</li>
        <li>Brevet du collège : 2018</li>
        <li>PSC 1 : 2018</li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">A propos</h2>
          <p className="text-base lg:text-lg">
            Je m&apos;appelle Safiya Larabi, et je suis titulaire d&apos;un BTS SIO - SLAM.
            Ma passion pour l&apos;informatique à pris un tournant en 2022, lorsque j&apos;ai décidé de donner une chance 
            à mes rêves et de vivre de ma passion. Cette année-là j&apos;ai décidé de prendre le risque et de quitter les
            études que je faisais pour me réorienter pour un BTS SIO &quot;Services informatiques aux organisations&quot; en spécialité &quot;Solutions logicielles et applications métiers&quot;.
            car c&apos;était ce qui me correspondait le mieux. Grâce aux BTS j&apos;ai pu intégrer et acquérir beaucoup de compétences qui pourront vous servir. Je crois fermement que 
            le travail acharné porte toujours ses fruits, mais je crois également qu&aposune bonne ambiance de travail en équipe sont le meilleur moyen d&apos;obtenir des résultats. Vous pouvez 
            consulter mon portfolio et n&apos;hésitez pas à me contacter si vous avez des questions.
            Bonne navigation ! 

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Scolarité{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Diplôme{" "}
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
