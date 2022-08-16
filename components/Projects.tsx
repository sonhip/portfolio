import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../public/assets/projects/1.png";
import netflixImg from "../public/assets/projects/2.png";
import cryptoImg from "../public/assets/projects/3.png";
import twitchImg from "../public/assets/projects/4.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 ">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            bgImg={propertyImg}
            title="Weather App"
            skills="ReactJS, Tailwind"
            url="https://react-weather-app-22019.web.app/"
          />
          <ProjectItem
            bgImg={netflixImg}
            title="Shopping App"
            skills="ReactJS"
            url="https://shopping-food-drink.web.app/"
          />
          <ProjectItem
            bgImg={cryptoImg}
            title="Blog and Portfolio"
            skills="ReactJS, Tailwind"
            url="https://sontranportfolio.netlify.app/post"
          />
          <ProjectItem
            bgImg={twitchImg}
            title="Mini Projects"
            skills="ReactJS"
            url="https://login-eec04.web.app"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
