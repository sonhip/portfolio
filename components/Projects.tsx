import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../public/assets/projects/property.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

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
            title="Property"
            skills="ReactJS"
            url="/"
          />
          <ProjectItem
            bgImg={netflixImg}
            title="Netflix"
            skills="ReactJS"
            url="/"
          />
          <ProjectItem
            bgImg={cryptoImg}
            title="Crypto"
            skills="ReactJS"
            url="/"
          />
          <ProjectItem
            bgImg={twitchImg}
            title="Twitch"
            skills="ReactJS"
            url="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
