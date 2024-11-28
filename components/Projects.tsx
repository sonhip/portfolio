import React from 'react';
import { LIST_PROJECT } from '../constants/projects';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 ">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {LIST_PROJECT.map((project) => (
            <ProjectItem
              key={project.title}
              bgImg={project.bgImg}
              title={project.title}
              skills={project.skills}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
