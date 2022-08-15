import Image from "next/image";
import React from "react";
import AboutImg from "../public/assets/about.jpg";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who Am I</h2>
          <p className="py-2 text-gray-600">
            My major is computer science, I spend most of my time studying at
            school. I have been working as a frontend fresher at a large company
            since my third year of college. I have more than two years of
            experience in this field, currently I am working as a frontend
            developer at SHB bank.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. Then I started working on
            personal projects to improve my skills and learning new
            technologies.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl rounded-xl shadow-gray-400 flex justify-center items-center p-4 hover:scale-105 ease-in duration-150">
          <Image src={AboutImg} alt="/" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
