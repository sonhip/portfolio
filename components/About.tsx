import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/assets/about.jpg';

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
            I am a passionate software engineer with over four years of
            experience specializing in frontend development, particularly using
            ReactJS, NextJS, and various UI libraries. My journey in the tech
            world began during my college years, where I majored in Computer
            Science. I was always fascinated by the complexity and creativity
            involved in programming, which sparked my interest in building
            interactive websites and applications.
          </p>
          <p className="py-2 text-gray-600">
            Since my third year of college, I’ve been working as a frontend
            developer at a big company, one of the leading tech companies in
            Vietnam. Over the years, I’ve developed a deep understanding of
            modern web technologies and best practices. My expertise extends
            beyond frontend development, as I have foundational knowledge in
            backend technologies such as Node.js and Java.
          </p>
          <p className="py-2 text-gray-600">
            In addition to my development skills, I am also experienced with AWS
            cloud services, having earned the AWS Certified Cloud Practitioner
            (CCP) certification. I’m currently preparing for the AWS Solutions
            Architect – Associate (SSA) certification to further expand my cloud
            expertise.
          </p>
          <p className="py-2 text-gray-600">
            Throughout my career, I’ve been committed to continuous learning,
            constantly exploring new technologies and improving my skills
            through personal projects. I take pride in writing clean,
            maintainable code and enjoy working in dynamic, collaborative
            environments. My goal is to build scalable, user-friendly
            applications that provide real value to users and organizations.
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
