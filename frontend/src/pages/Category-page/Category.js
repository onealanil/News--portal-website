import React from "react";
import { useNavigate } from "react-router-dom";
import LatestUpdatesSide from "../../components/Landing-news-section/LatestUpdatesSide";
import { Fade } from "react-awesome-reveal";
import { AiOutlineHome } from "react-icons/ai";

const Category = () => {
  const navigate = useNavigate();
  const data = [
    {
      url: "./images/UML.jpg",
      data: "Nepal's first win in world cup for the nation of the world of the economics of the world of the adf.",
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

  return (
    <>
      <div className="flex w-[90%] xl:w-[85%] 2xl:w-[80%] items-center justify-center pt-4 mt-20">
        <div className="flex flex-col w-full gap-2 md:gap-4">
          <div className="flex w-[100%] gap-x-5 ">
            <div className=" flex md:w-[75%]  flex-col gap-8 py-4 px-2">
              <div className="flex flex-col gap-2">
                {/* category */}
                <span className="flex gap-2 items-center text-txtLight text-xs sm:text-sm md:text-base">
                  <AiOutlineHome className="cursor-pointer hover:text-dark" /> /{" "}
                  <p className="underline text-[#434141] font-semibold cursor-pointer tracking-widest">
                    {" "}
                    Politics
                  </p>
                </span>
              </div>
              <div className="grid md:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-6">
                {data.map((val, index) => (
                  <>
                    {/* one item start  */}
                    <Fade>
                      <div
                        className="flex cursor-pointer"
                        key={index}
                        onClick={() => {
                          navigate("/article");
                        }}
                      >
                        <div className="w-[45%]">
                          <img
                            className="h-[6rem] w-full object-cover rounded-md"
                            src={val.url}
                            alt="news1 "
                          />
                        </div>
                        {/*This Is to separate three spans in sport section*/}
                        <div className="flex flex-col h-[6rem] p-2 gap-y-4 w-[55%]">
                          <span className="font-bold text-[14px]  font-timesNewRoman leading-relaxed tracking-wide line-clamp-2">
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
              <div className="w-full flex items-center justify-center font-timesNewRoman font-semibold tracking-widest leading-relaxed md:my-8 my-4">
                <span className="px-4 py-2 bg-[#121221] text-white rounded-md cursor-pointer">
                  Load More
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <LatestUpdatesSide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
