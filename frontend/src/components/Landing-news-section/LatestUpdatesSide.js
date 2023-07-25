import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const data = [
  {
    url: "./images/UML.jpg",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Sports",
  },
  {
    url: "./images/see.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Health",
  },
  {
    url: "./images/UML.jpg",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Sports",
  },
  {
    url: "./images/see.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Sports",
  },
  {
    url: "./images/villan.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Sports",
  },
];

const LatestUpdatesSide = () => {
  return (
    <>
      <div className="  bg-white py-8 px-4 flex flex-col gap-y-5 mt-4 drop-shadow-lg">
        {/*top*/}
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-10 ">
            <span className="font-bold">Latest Update</span>
          </div>
          <hr className="w-10 border-black border-t-4 "></hr>
        </div>

        {/* mapping  */}
        <div className="flex flex-col gap-y-4">
          {data.map((val, index) => (
            <>
              {/* one item start  */}
              <div
                className="flex items-center justify-center h-[6rem] "
                key={index}
              >
                <div className="w-[45%]">
                  <img
                    className="md:h-[5rem] w-full object-cover rounded-md"
                    src={val.url}
                    alt="news1 "
                  />
                </div>
                {/*This Is to separate three spans in sport section*/}
                <div className="flex flex-col h-[5rem] w-[55%]  justify-center px-2 gap-y-1">
                  <span className="text-sm text-gray-400 font-bold">
                    {val.in}
                  </span>
                  <span className="font-bold text-[14px] font-timesNewRoman leading-relaxed tracking-wide">
                    {val.data}
                  </span>
                  <span className="text-[10px] font-domine text-gray-400">
                    {val.time}
                  </span>
                </div>
              </div>
              {/* one items end  */}
            </>
          ))}

          {/*This is for the view all Button*/}
        </div>
        {/* mapping end  */}
        <hr className="w-72 border-black border-t-1 "></hr>
        <div className="flex items-center justify-center">
          <span class="bg-white hover:bg-gray-300 px-4 cursor-pointer py-2 shadow-xl rounded-full font-playfair font-bold text-sm flex items-center justify-center gap-x-2 text-gray-500">
            View all
            <MdOutlineArrowForwardIos />
          </span>
        </div>
      </div>
    </>
  );
};

export default LatestUpdatesSide;
