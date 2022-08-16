import Image from "next/image";
import React from "react";
import {
  ImgHtml,
  ImgCss,
  ImgJs,
  ImgReact,
  ImgNext,
  ImgNode,
  ImgTailwind,
  ImgGit,
} from "../public/assets/skills";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl uppercase text-[#5651e5]">Skills</p>
        <h2 className="pt-4 pb-6">What Can I Do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image src={ImgHtml} width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Html</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image src={ImgCss} width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Css</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image src={ImgJs} width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image src={ImgReact} width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Reactjs</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image src={ImgNext} width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nextjs</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image src={ImgNode} width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nodejs</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image src={ImgTailwind} width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image src={ImgGit} width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
