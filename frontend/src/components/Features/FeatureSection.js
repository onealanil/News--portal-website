import React from "react";
import { Fade } from "react-awesome-reveal";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const data = [
  {
    url: "./images/UML.jpg",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
  },
  {
    url: "./images/see.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
  },
  {
    url: "./images/UML.jpg",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
  },
  {
    url: "./images/see.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
  },
  {
    url: "./images/villan.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
  },
  {
    url: "./images/villan.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
  },
  {
    url: "./images/villan.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
  },
  {
    url: "./images/villan.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
  },
];

const FeatureSection = () => {
  return (
    <>
      <div className="w-[100%] flex items-center justify-center my-7">
        <div className="w-[96%] bg-gray-500 h-[0.5px]"></div>
      </div>
      <div className="flex flex-col pl-5">
        {/* top  */}
        <div className="flex items-center justify-between">
          <p className="font-bold">Features</p>
          <span className="mr-4">
            <IoIosArrowDroprightCircle size={30} className="cursor-pointer" />
          </span>
        </div>
        <hr className=" border-t-4 border-black w-12 mt-0 mb-2 " />
      </div>
      <div className="flex p-5 gap-x-10">
        {/* left side  */}
          <div className="w-[100%] md:w-[40%] ">
        <Fade>
            <div className="flex flex-col gap-y-3">
              {/* image  */}
              <div>
                <img
                  src="./images/UML.jpg"
                  alt="feature-image"
                  className="rounded-md"
                />
              </div>
              {/* data  */}
              <div>
                <p className="text-md font-timesNewRoman leading-relaxed tracking-wide">
                  Although it became the Greater Boston Neapolitan Community
                  (GBNC), For praying to god and celebrating, although it became
                  the greater boston nepolitan community for praying to god and
                  celebrating although it became the greater boston
                </p>
              </div>
            </div>
        </Fade>
          </div>
        {/* right side  */}
        <div className="hidden w-[60%] md:grid grid-cols-2 gap-4">
          {data.map((val, index) => (
            <>
              {/* one item start  */}
              <Fade>
                <div className="flex cursor-pointer" key={index}>
                  <div className="w-[45%]">
                    <img
                      className="md:h-[5rem] w-full object-cover rounded-md"
                      src={val.url}
                      alt="news1 "
                    />
                  </div>
                  {/*This Is to separate three spans in sport section*/}
                  <div className="flex flex-col h-[5rem] p-2 gap-y-1">
                    <span className="font-bold text-[14px] font-timesNewRoman leading-relaxed tracking-wide">
                      {val.data}
                    </span>
                    <span className="text-[10px] font-domine text-gray-400">
                      {val.time}
                    </span>
                  </div>
                </div>
              </Fade>
              {/* one items end  */}
            </>
          ))}
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center my-5">
        <div className="w-[96%] bg-gray-500 h-[0.5px]"></div>
      </div>
    </>
  );
};

export default FeatureSection;
