import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleToggleNav = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) return setShadow(true);
      return setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      // className={
      //   shadow
      //     ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]"
      //     : "fixed w-full h-20 z-[100] bg-[#ecf0f3]"
      // }
      className={false ? "dark:bg-red-300" : "bg-white"}
    >
      <div className="w-full max-w-[1240px] mx-auto h-full p-2 flex justify-between items-center 2xl:px-16">
        <Link href="/">
          <h2 className="text-[#5651e5] shadow-lg shadow-gray-400 p-2 cursor-pointer">
            Son Tran
          </h2>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleToggleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <Link href="/">
                <h2 className="text-[#5651e5] shadow-lg shadow-gray-400 p-2 cursor-pointer">
                  Son Tran
                </h2>
              </Link>
              <div
                className="rounded-full cursor-pointer shadow-lg p-3 shadow-gray-400"
                onClick={handleToggleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b my-3 border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">Create something new!</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/tran-son-bab24216b/"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/sonhip"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="mailto:sonhipkmhd@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
                {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
