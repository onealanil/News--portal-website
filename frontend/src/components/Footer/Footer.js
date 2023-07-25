import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="bg-[#121221] px-10 py-8 flex flex-col items-center 
        justify-center"
        >
          <div className=" flex flex-col gap-y-5 md:flex-row w-[100%] md:gap-x-10 font-side ">
            <div className="flex flex-col md:w-[40%] w-[90%] items-center justify-center">
              <div className=" w-[90%] flex flex-col  gap-y-5">
                <h1 className="text-white font-bold text-2xl">LOGO</h1>
                <p className="text-gray-400 pr-10 ">
                  Nepal’s number 1 and most trusted news portal. A very short
                  description
                </p>

                <div className="flex flex-col gap-y-2">
                  <div className="text-gray-400  flex items-center gap-x-3">
                    <img
                      src="/images/location.png"
                      alt="location"
                      className="md:h-[18px] md:w-[18px] h-[15px] w-[15px]"
                    ></img>
                    <span className="md:font-[700] text-base">
                      Sundarharaincha -08, Morang
                    </span>
                  </div>

                  <div className="text-gray-400  flex items-center gap-x-3">
                    <img
                      src="/images/phone.png"
                      alt="phone"
                      className="md:h-[18px] md:w-[18px] h-[15px] w-[15px]"
                    ></img>
                    <span className="md:font-[700] text-base">Phone:</span>
                    +977-9812345678
                  </div>

                  <div className="text-gray-400  flex items-center gap-x-3">
                    <img
                      src="/images/mail.png"
                      alt="mail"
                      className="md:h-[18px] md:w-[18px] h-[15px] w-[15px]"
                    ></img>
                    <span className="md:font-[700] text-base">Email:</span>
                    newsportal@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-[20%] gap-y-3 font-sideFont">
              <p className="text-white font-bold text-2xl leading-relaxed tracking-wide">
                News
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-gray-400">Local News</p>
                <p className="text-gray-400 ">Politics</p>
                <p className="text-gray-400 ">Business</p>
                <p className="text-gray-400">Sports</p>
                <p className="text-gray-400">Health</p>
              </div>
            </div>

            <div className="flex flex-col w-[20%] gap-y-3 font-sideFont">
              <p className="text-white font-bold text-2xl leading-relaxed tracking-wide">
                Lifestyle
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-gray-400">Lifestyle News</p>
                <p className="text-gray-400">Art</p>
                <p className="text-gray-400">Diet</p>
                <p className="text-gray-400">Fitness</p>
                <p className="text-gray-400">People</p>
              </div>
            </div>

            <div className="flex flex-col md:w-[20%] w-[90%] gap-y-3 font-sideFont">
              <p className="text-white font-bold text-2xl leading-relaxed tracking-wide">
                Follow Us
              </p>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/facebook.png"
                    alt="facebook"
                    className="h-[20px] w-[20px] rounded-[55px] "
                  ></img>
                  <p className="text-gray-400 ">Facebook</p>
                </div>

                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/instagram.png"
                    alt="facebook"
                    className="h-[20px] w-[20px] rounded-[55px] "
                  ></img>
                  <p className="text-gray-400 ">Instagram</p>
                </div>

                <div className="flex items-center gap-x-3">
                  <img
                    src="/images/twitter.png"
                    alt="facebook"
                    className="h-[20px] w-[20px] rounded-[55px] "
                  ></img>
                  <p className="text-gray-400  ">Twitter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center pb-6 md:py-14 justify-center mt-10">
            <span className="hidden md:block md:w-56 md:border border-b-white"></span>
            <div className="flex gap-x-3 md:px-8 px-4 items-center justify-center">
              <span class=" text-white md:px-4 font-light font-copyrightFont">
                Copyright @ 2023- All rights reserved.
              </span>
            </div>
            <span className="hidden md:block md:w-56 border border-b-white"></span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
