import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/thankyou");
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] px-2 py-16 w-full m-auto">
        <p className="uppercase tracking-widest text-[#5651e5] text-xl">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left  */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={ContactImg}
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-200"
                />
              </div>
              <div>
                <h2 className="py-2">Son Tran</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or part-time positions. Contact
                  me and let's talk!
                </p>
              </div>
              <p className="pt-8 uppercase">Connect With Me!</p>
              <div className="flex items-center justify-between py-4">
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
          {/* right  */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                // onSubmit={handleSubmit}
                action="https://formsubmit.co/sonhipkmhd@gmail.com"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm uppercase py-2">
                      Name
                    </label>
                    <input
                      required
                      name="name"
                      id="name"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm uppercase py-2">
                      Phone number
                    </label>
                    <input
                      name="phone"
                      required
                      id="phone"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="text-sm uppercase py-2">
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    id="email"
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="text-sm uppercase py-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    required
                    id="subject"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="text-sm uppercase py-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    id="message"
                    rows={10}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <input
                  type="hidden"
                  name="_subject"
                  value="New email from your portfolio!!!"
                />
                <button
                  className="text-gray-100 w-full mt-4 p-4 shadow-xl shadow-gray-400  rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-all ease-in duration-3000">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
