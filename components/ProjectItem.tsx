import Image, { StaticImageData } from "next/image";
import React from "react";

export interface ProjectProp {
  title: string;
  bgImg: string | StaticImageData;
  url: string;
  skills: string;
}

const ProjectItem = (props: ProjectProp) => {
  const { title, bgImg, url, skills } = props;
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10 transition-all ease-linear duration-150"
        src={bgImg}
        alt="/"
      />
      <div className="absolute hidden group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white text-center tracking-wider">
          {title}
        </h3>
        <p className="text-white pb-4 pt-2 text-center">{skills}</p>
        <a target="_blank" rel="noopener" href={url}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
