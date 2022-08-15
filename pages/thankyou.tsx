import React from "react";

const Thankyou = () => {
  return (
    <div className="login-main-wrapper h-screen">
      <div className="main-container">
        <div className="login-process">
          <div className="login-main-container">
            <div className="thankyou-wrapper w-full">
              <h1>
                <img
                  className="mx-auto"
                  src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                  alt="thanks"
                />
              </h1>
              <p>for contacting me, I will get in touch with you soon... </p>
              <a
                className="text-gray-100 w-full mt-16 p-4 shadow-xl shadow-gray-400  rounded-xl uppercase bg-gradient-to-r from-[#5651e5] w-[250px] text-center to-[#709dff] block mx-auto"
                href="/"
              >
                Back to home
              </a>
              <div className="clr"></div>
            </div>
            <div className="clr"></div>
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </div>
  );
};

export default Thankyou;
