import { AiOutlineMail } from 'react-icons/ai';
import { FaBlogger, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Main() {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full p-2 flex items-center justify-center mx-auto">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Keep learning a little more every day! 😬😬😬
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Son Tran</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <div className="flex items-center justify-between max-w-[330px] py-4 m-auto">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/tran-son-bab24216b/"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaLinkedinIn />
              </div>
            </a>
            <a target="_blank" rel="noopener" href="https://github.com/sonhip">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaGithub />
              </div>
            </a>
            <a target="_blank" rel="noopener" href="https://sontran.blog/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaBlogger />
              </div>
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <a href="mailto:sonhipkmhd@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
