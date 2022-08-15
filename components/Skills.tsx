import Image from "next/image";
import React from "react";

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
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Html</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Css</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Reactjs</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nextjs</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nodejs</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64px"
                  height="64px"
                />
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
